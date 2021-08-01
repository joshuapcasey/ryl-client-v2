import React, { Component } from 'react';
import LandlordGet from './LandlordGet';

type AcceptedProps = {
    sessionToken: string | null;
}

type LandlordGetState = {
    

}

export default class LandlordDisplay extends Component  <AcceptedProps, LandlordGetState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="Container">
                <div className="LandlordIndexWrapper">
                    LandlordIndex page
                    {/* <LandlordGet userData={this.state.userData}/> */}
                </div>
            </div>
        )
    }

}