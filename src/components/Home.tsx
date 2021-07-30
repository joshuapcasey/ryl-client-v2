import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer'

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
                <Router>
                    <Nav />
                    <Main />
                </Router>
                <Footer />
                </div>
            </div>
        )
    }

}
