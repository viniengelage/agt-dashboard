import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home';

import Header from '../components/header'
import Sidebar from '../components/menu'

const Routes = (props) => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Sidebar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;