import React from 'react';
import {Admin, Resource} from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import dataProvider from './dataProvider';
import './App.css';
import chineseMessages from './i18n/cn';
import network from './network';
// import Dashboard from "./dashboard/Dashboard";
import authProvider from "./authProvider";
import Login from "./layout/Login";
import Layout from "./layout/Layout";
import customRoutes from './routes';
import themeReducer from './themeReducer';
import bbus from './bbus';
import ues from './ues';
import bbupools from './bbupools'
import rrus from './rrus'
import configs from './configs'
import Welcome from "./welcome";
const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    } else if (locale === 'en') {
        return import('./i18n/en').then(messages => messages.default)
    }

    // Always fallback on chinese
    return chineseMessages;
}, 'cn');

const App = () => {
    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return (
        <Admin
            dataProvider={dataProvider}
            i18nProvider={i18nProvider}
            customReducers={{theme: themeReducer}}
            customRoutes={customRoutes}
            authProvider={authProvider}
            dashboard={Welcome}
            loginPage={Login}
            layout={Layout}
        >
            <Resource name="networks" {...network}/>
            <Resource name="bbus" {...bbus}/>
            <Resource name="ues" {...ues}/>
            <Resource name="rrus" {...rrus}/>
            <Resource name="configs" {...configs}/>
            <Resource name="wirelesslinkmodel" />
            <Resource name="bbupools" {...bbupools}/>
        </Admin>
    );
};
export default App;
