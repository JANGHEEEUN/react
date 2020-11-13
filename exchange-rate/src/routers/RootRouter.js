import React from 'react';
import {Switch, Route, } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';


function RootRouter (props) {
    return(
        <Switch>
            <Route exact path='/'>
                <Main/>
            </Route>
            <Route 
                path='/currency/:currencyCode'
                component={Detail}>
            </Route>
        </Switch>
    );
}



export default RootRouter;