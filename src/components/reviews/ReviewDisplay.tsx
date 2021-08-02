import React, { Component } from 'react';
import APIURL from "../../helpers/environment";


type AcceptedProps = {
    sessionToken: string | null;
};

type ReviewDisplayState = {
    reviews: Review[];
    landlordID: number;
    propertyAddress: string;
    rent: number;
    comment: string;
    //! reviewerID: number;
}

export default class ReviewDisplay extends Component  <AcceptedProps, ReviewDisplayState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
        reviews: [],
        landlordID: 0,
        propertyAddress: '',
        rent: 0,
        comment: '',
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

                <div className="row row-cols-3 mb-2">
                {this.state.reviews.map((review: Review, index: number) => {
                    return (
                    <div
                        key={review.landlordID}
                        className="card text-white bg-primary mb-3 mr-4"
                        style={{ maxWidth: "30%" }}
                    >
                        <div className="card-header d-flex justify-content-between">
                            <span>{review.propertyAddress}</span>
                            <span>
                                {/* <StarRating rating={reviews.rating} /> */}
                            {review.rent} 
                            </span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{review.comment}</p>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>

        );
    };
}
