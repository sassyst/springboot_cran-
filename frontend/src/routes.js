import React from 'react';
import {Route} from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';
import Dashboard from "./dashboard/Dashboard";

export default [
    <Route exact path="/index" render={() => <Dashboard/>}/>,
    <Route exact path="/configuration" render={() => <Configuration/>}/>,
    <Route exact path="/segments" render={() => <Segments/>}/>,
];
