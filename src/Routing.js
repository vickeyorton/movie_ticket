import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import Booking from './Components/Booking/Booking';
import TicketPage from './Components/TicketPage/TicketPage';

function Routing() {
    return (
        <div style={{background:"#161616"}}>
            
            <BrowserRouter>
                <div>
                <Header/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/detail" component={Booking}/>
                        <Route path="/ticket" component={TicketPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Routing
