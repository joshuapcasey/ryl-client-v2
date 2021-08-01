import React, { Component } from 'react';
import APIURL from "../../helpers/environment";


type AcceptedProps = {
    sessionToken: string | null;

}

type ReviewGetState = {
    reviews: Review[];

}

export default class Review extends Component  <AcceptedProps, ReviewGetState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
        reviews: [],
        };
        this.fetchReviews = this.fetchReviews.bind(this);
    }

    componentDidMount() {
        console.log("Mounting Reviews");
        this.fetchReviews();
    }


    fetchReviews = async () => {
        let requestHeaders: any = {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken
        };
        
        try {
            console.log("function hit")
        const res = await fetch(`http://localhost:4001/review/all`, {
            method: "GET",
            headers: requestHeaders
        });
        console.log(`Res: ${res}`)

        const data = await res.json();
        console.log(`Review Data: ${data.allReviews[0].comment}`);
        console.log(`Review Data: ${data.allReviews[5].comment}`);

        this.setState({reviews: data.allReviews})
        console.log(this.state)

        } catch (err) {
        console.log(err);
        }
    };

    render () {
        return (
            <div className="Container">
                <div className="ReviewGetWrapper">
                    Review page
                </div>
            </div>
        )
    }

}