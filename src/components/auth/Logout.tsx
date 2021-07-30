import React, { Component } from 'react';


type AcceptedProps = {
    
}

type LogoutState = {
    

}

export default class Logout extends Component  <AcceptedProps, LogoutState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="Container">
                <div className="LogoutWrapper">
               Logout page
                </div>
            </div>
        )
    }

}