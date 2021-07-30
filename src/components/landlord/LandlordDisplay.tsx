import React, { Component } from 'react';


type AcceptedProps = {
    
}

type LandlordState = {
    

}

export default class Landlord extends Component  <AcceptedProps, LandlordState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="Container">
                <div className="LandlordWrapper">
                    landlord page
                </div>
            </div>
        )
    }

}