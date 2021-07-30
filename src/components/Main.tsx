import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Home";
import Landlord from "./landlord/LandlordDisplay";
import Profile from "./user/UserDisplay";

type AcceptedProps = {
    // updateToken: (newToken: string, newUserId: number, newRole: string) => void
}

type MainState = {
    

}

export default class Main extends Component <AcceptedProps, {}> {
    constructor(props: AcceptedProps) {
        super (props)
        
        
    }

    render () {
        return (
            <React.Fragment>
                {/* <Router> */}
                    <Switch>
                        <Route exact path="/login" component={ Login } />
                        <Route exact path="/register" component={ Register } />
                        <Route exact path="/home" component={ Home } />
                        <Route exact path="/landlord" component={ Landlord } />
                        <Route exact path="/profile" component={ Profile } />
                    </Switch>
                {/* </Router> */}
            </React.Fragment>
        )
    }
}   