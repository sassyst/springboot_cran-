import simpleRestProvider from 'ra-data-simple-rest';
const dataProvider = simpleRestProvider('api');
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