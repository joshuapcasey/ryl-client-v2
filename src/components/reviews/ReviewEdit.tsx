import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import APIURL from '../../helpers/environment'

type Props = {
    sessionToken: string | null,
    landlordID: number,
    propertyAddress: string,
    rent: number,
    comment: string
    id: number
}

type State = {
    modalOpen: boolean
    landlordID: number,
    propertyAddress: string,
    rent: number,
    comment: string
}


class ReviewEdit extends React.Component  <Props, State> {
    constructor(props: Props) {
    super(props);
    this.state = {
        modalOpen: false,
        landlordID: 0,
        propertyAddress: '',
        rent: 0,
        comment: ''
    }

    this.toggle = this.toggle.bind(this);
    this.editReview = this.editReview.bind(this);
    }

    editReview = async() => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try{
        const res = await fetch(`${APIURL}/review/${this.props.id}/admin`, {
            method: "PUT",
            body: JSON.stringify({
                landlord: {
                    landlordID: this.state.landlordID,
                    propertyAddress: this.state.propertyAddress,
                    rent: this.state.rent,
                    comment: this.state.comment
                }
            }),
            headers: requestHeaders
        })

        const data = await res.json();
        console.log(`Data: ${data}`)
        this.toggle();
        } catch (err){
            console.log(err)
        }
    }
    

    toggle(){
        this.setState({
            modalOpen: !this.state.modalOpen
        })
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

export default ReviewEdit;