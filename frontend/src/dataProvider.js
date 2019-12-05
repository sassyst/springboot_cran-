import simpleRestProvider from 'ra-data-simple-rest';
import fakeRestProvider from 'ra-data-fakerest';
import data from './data/availablenet';
// const dataProvider = simpleRestProvider('api');
const dataProvider = fakeRestProvider(data, true);

const delayedDataProvider = new Proxy(dataProvider, {
    get: (target, name, self) =>
        name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
            ? self
            : (resource, params) =>
                  new Promise(resolve =>
                      setTimeout(
                          () => resolve(dataProvider[name](resource, params)),
                          500
                      )
                  ),
});

export default delayedDataProvider;