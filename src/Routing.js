import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home';

function Routing() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Routing
