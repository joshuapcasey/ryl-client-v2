import React, { Component } from 'react';


type AcceptedProps = {
    
}

type ReviewDisplayState = {
    

}

export default class ReviewDisplay extends Component  <AcceptedProps, ReviewDisplayState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="Container">
                <div className="ReviewDisplayWrapper">
                    ReviewDisplay page
                </div>
            </div>
        )
    }

}