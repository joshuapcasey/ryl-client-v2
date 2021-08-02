import React, { Component } from 'react';
import APIURL from "../../helpers/environment";


type AcceptedProps = {
    sessionToken: string | null;
    sessionID: number | null;
}

type UserProfileState = {
    userId: number | null,
    userData: {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        createdAt: string
        // reviews: [
        //     {
        //         id: number,
        //         landlordID: number,
        //         propertyAddress: string,
        //         comment: string,
        //         rent: number,
        //         reviewerID: number
        //     }
        // ]
    }

}

export default class UserProfile extends Component  <AcceptedProps, UserProfileState> {
    constructor(props: AcceptedProps) {
    super(props);
    this.state = {
        userId: null,
        userData: {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            createdAt: '',
            // reviews: [
            //     {
            //         id: 0,
            //         landlordID: 0,
            //         propertyAddress: '',
            //         comment: '',
            //         rent: 0,
            //         reviewerID: 0
            //     }
            // ]
        }
    };

    }
    componentDidMount() {
        console.log(`Session ID: ${this.props.sessionID}`);
        
        this.fetchUserInfo();
    }
    
    fetchUserInfo = async () => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try {
            // const res = await fetch(`${APIURL}/user/profile${ID}`, {
            // const res = await fetch(`${APIURL}/user/profile`, {

            const res = await fetch(`${APIURL}/user/profile/${this.props.sessionID}`, {
                method: "GET",
                headers: requestHeaders,
            });
            const data = await res.json();
                console.log(`User Profile Data: ${data.thisUser.id}`);
                console.log(data);
                
            // this.setState({userData: data.userProfile})
                console.log(this.state)
            } catch (err) {
                console.log(err);
            }
        };
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