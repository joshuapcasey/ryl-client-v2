import React, { Component } from 'react';


type AcceptedProps = {
    sessionToken: string | null
}

type ReviewAddState = {
    

}

export default class ReviewAdd extends Component  <AcceptedProps, ReviewAddState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    componentDidMount(){
        console.log("Review Add mounted")
    }

    addReview = async() => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try{
        const res = await fetch('', {
            method: "POST",
            body: JSON.stringify({

            }),
            headers: requestHeaders
        })

        const data = await res.json();
        console.log(`Data: ${data}`)
    } catch (err){
        console.log(err)
    }
    }

    render () {
        return (
            <div className="Container">
                <div className="ReviewAddWrapper">
                    ReviewAdd page
                </div>
            </div>
        )
    }

}