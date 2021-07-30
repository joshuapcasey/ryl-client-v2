import React, { Component } from 'react';


type AcceptedProps = {
    
}

type UserProfileState = {
    

}

export default class UserProfile extends Component  <AcceptedProps, UserProfileState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="Container">
                <div className="UserProfileWrapper">
                    UserProfile page
                </div>
            </div>
        )
    }

}