import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import APIURL from '../../helpers/environment'

type Props = {
    sessionToken: string | null,
    propertyManagement: string,
    rating: number,
    id: number
}

type State = {
    modalOpen: boolean
    propertyManagement: string
    rating: number
}

class LandlordAdd extends Component  <Props, State> {
    constructor(props: Props) {
    super(props);
    this.state = {
        modalOpen: false,
        propertyManagement: '',
        rating: 0
    }
    this.toggle = this.toggle.bind(this);
    this.addLandlord = this.addLandlord.bind(this);
    }

    
    addLandlord = async() => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try{
        const res = await fetch(`${APIURL}/landlord/${this.props.id}/admin`, {
            method: "PUT",
            body: JSON.stringify({
                landlord: {
                    propertyManagement: this.state.propertyManagement,
                    rating: this.state.rating
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

    render(){
    return (
        <div>
        <Button onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Add New Landlord</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup>
                    <Label for="propertyManagement Name">Property Management </Label>
                    <Input type="text" name="propertyManagment Name" id="propertyManagement Name" placeholder="Name" onChange={(e) => this.setState({propertyManagement: e.target.value})}
                    value={this.state.propertyManagement}/>
                </FormGroup>
                <FormGroup>
                    <Label for="landlordRating">Rating</Label>
                    <Input type="number" min='1' max="5" name="rating" id="rating" onChange={(e) => this.setState({rating: parseInt(e.target.value)})}
                    value={this.state.rating} multiple> 
                    </Input>
                </FormGroup>
                </Form>
        
            </ModalBody>
            <ModalFooter>
            <Button color="primary"onClick={this.addLandlord}>Update</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }
}

export default LandlordAdd;