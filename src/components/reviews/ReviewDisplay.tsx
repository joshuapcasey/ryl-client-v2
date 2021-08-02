import React, { Component } from 'react';
import APIURL from "../../helpers/environment";
import ReviewDelete from './ReviewDelete';
import ReviewEdit from './ReviewEdit';


type AcceptedProps = {
    sessionToken: string | null;
    sessionID: number | null;
};

type ReviewDisplayState = {
    reviews: Review[];
    landlordID: number;
    propertyAddress: string;
    rent: number;
    comment: string;
    reviewerID: number;
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
        reviewerID: 0

        };
        this.fetchReviews = this.fetchReviews.bind(this);
    }

    componentDidMount() {
        console.log("Mounting Reviews");
        console.log(this.props.sessionID)
        this.fetchReviews();
    }


    fetchReviews = async () => {
        let requestHeaders: any = {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken
        };
        
        try {
            console.log("function hit")
        const res = await fetch(`${APIURL}/review/userreviews/${this.props.sessionID}`, {
            method: "GET",
            headers: requestHeaders
        });
        console.log(`Res: ${res}`)

        const data = await res.json();
        console.log(`Review Data: ${data.userReviews[0]}`);
        console.log(`Review Data: ${data.userReviews[5]}`);

        this.setState({reviews: data.userReviews})
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
                        <div className="card-footer">
                            <span><ReviewEdit
                            id={review.id}
                                landlordID={review.landlordID}
                                sessionToken={this.props.sessionToken}
                                propertyAddress={review.propertyAddress}
                                rent={review.rent}
                                comment={review.comment}
                                />
                            </span>
                            <span><ReviewDelete
                            id={review.id}
                            sessionToken={this.props.sessionToken}
                                />
                            </span>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>

        );
    };
}
