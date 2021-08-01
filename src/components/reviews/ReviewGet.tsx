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
    }

    componentDidMount() {
        this.fetchReviews();
    }

    fetchReviews = async () => {
        let requestHeaders: any = {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
        };
        try {
        const res = await fetch(`${APIURL}/review/all`, {
            method: "GET",
            headers: requestHeaders,
        });
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