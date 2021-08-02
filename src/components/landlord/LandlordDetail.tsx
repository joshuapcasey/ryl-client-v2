import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

type Props = {
  sessionToken: string | null;
  landlordID: number;
  propertyManagement: string;
};

type State = {
  modalOpen: boolean;
  reviews: Review[];
  propertyAddress: string;
  comment: string;
  rent: any;
};

class LandlordDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalOpen: false,
      reviews: [],
      propertyAddress: '',
      comment: '',
      rent: null

    };
    this.toggle = this.toggle.bind(this);
    this.landlordReviews = this.landlordReviews.bind(this);
    this.addReview = this.addReview.bind(this);
  }

  componentDidMount() {
    this.landlordReviews();
  }

  landlordReviews = async () => {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.props.sessionToken,
    };
    try {
      const res = await fetch(
        `${APIURL}/review/landlordreviews/${this.props.landlordID}`,
        {
          method: "GET",
          headers: requestHeaders,
        }
      );

      const data = await res.json();
      console.log(`Data: ${data.foundReviews}`);

      this.setState({
        reviews: data.foundReviews,
      });
    } catch (err) {
      console.log(err);
    }
  };

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
}
    addReview = async() => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try{
        const res = await fetch(`${APIURL}/review/newReview/${this.props.landlordID}`, {
            method: "POST",
            body: JSON.stringify({
                review: {
                    propertyAddress: this.state.propertyAddress,
                    rent: this.state.rent,
                    comment: this.state.comment
                }
            }),
            headers: requestHeaders
        })
        alert("review successfully added");
        this.toggle()
        const data = await res.json();
        console.log(`Data: ${data}`)
    } catch (err){
        console.log(err)
    }
}
  



  render() {
    return (
      <div className="Container">
        <Button onClick={this.toggle}>{this.props.propertyManagement}</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Landlord Reviews for {this.props.propertyManagement}</ModalHeader>
          <ModalBody>
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
          </ModalBody>
          <Form>
                <FormGroup>
                    <Label for="Address">Property Address </Label>
                    <Input type="text" name="Address" id="Address" placeholder="Address" onChange={(e) => this.setState({propertyAddress: e.target.value})}
                    value={this.state.propertyAddress}/>
                </FormGroup>
                <FormGroup>
                    <Label for="rent">Rent</Label>
                    <Input type="number" name="rent" id="rent" onChange={(e) => this.setState({rent: parseInt(e.target.value)})}
                    value={this.state.rent} /> 
                </FormGroup>
                <FormGroup>
                    <Label for="Comment">Comment </Label>
                    <Input type="text" name="Comment" id="Comment" placeholder="Comment" onChange={(e) => this.setState({comment: e.target.value})}
                    value={this.state.comment}/>
                </FormGroup>
                </Form>
          <ModalFooter>
              <Button color="primary" onClick={this.addReview}>
              Submit Review
                </Button>

            <Button color="secondary" onClick={this.toggle}>
              Exit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LandlordDetail;
