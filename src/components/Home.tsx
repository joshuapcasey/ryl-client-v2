import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer'

// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import Landlord from "./landlord/LandlordDisplay";
// import Profile from "./user/UserDisplay";

type AcceptedProps = {
    // updateToken: (newToken: string, newUserId: number, newRole: string) => void
}

type HomeState = {
    

}

export default class Home extends Component   <AcceptedProps, HomeState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="Container">
                <div className="HomeWrapper">
                    Homepage
                    {/* <Router>
                        <Nav />
                    </Router> */}
                    <Main />
                    <Footer />
                </div>
            </div>
        )
    }

}
