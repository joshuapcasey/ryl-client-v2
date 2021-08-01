// export {}

import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import Home from "./Home";
// import Landlord from "./landlord/LandlordDisplay";
// import Profile from "./user/UserDisplay";

type AcceptedProps = {
    // updateToken: (newToken: string, newUserId: number, newRole: string) => void
}

type MainState = {
    

}

export default class Main extends Component <AcceptedProps, MainState> {
    constructor(props: AcceptedProps) {
        super (props)
        
        
    }

    render () {
        return (
            <div className="Container">
                <div className="MainWrapper">
                    main
                </div>
            </div>
            
        )
    }
}   