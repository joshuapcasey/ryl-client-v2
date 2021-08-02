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
        const res = await fetch(`${APIURL}/review/${this.props.id}/${this.props.landlordID}`, {
            method: "PUT",
            body: JSON.stringify({
                review: {
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
            <div>
        <Button onClick={this.toggle}>Edit</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Edit Landlord</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup>
                    <Label for="propertyAddress">Property Address </Label>
                    <Input 
                        type="text" 
                        name="propertyAddress" 
                        id="propertyAddress" 
                        placeholder="Address" 
                        onChange={(e) => this.setState({propertyAddress: e.target.value})}
                        value={this.state.propertyAddress}/>
                </FormGroup>
                <FormGroup>
                    <Label for="rent">Rent</Label>
                    <Input 
                        type="number" 
                        name="rent" 
                        id="rent" 
                        onChange={(e) => this.setState({rent: parseInt(e.target.value)})}
                        value={this.state.rent}> 
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Comment">Comment </Label>
                    <Input type="text" name="Comment" id="Comment" placeholder="Comment" onChange={(e) => this.setState({comment: e.target.value})}
                    value={this.state.comment}/>
                </FormGroup>
                </Form>
        
            </ModalBody>
            <ModalFooter>
            <Button color="primary"onClick={this.editReview}>Update</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }

}

export default ReviewEdit;