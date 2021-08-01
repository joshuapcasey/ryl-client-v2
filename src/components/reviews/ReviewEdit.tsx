import React, { Component } from 'react';


type AcceptedProps = {
    sessionToken: string | null;

}

type ReviewEditState = {
    

}

export default class ReviewEdit extends Component  <AcceptedProps, ReviewEditState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="Container">
                <div className="ReviewEditWrapper">
                    ReviewEdit page
                </div>
            </div>
        )
    }

}