import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import APIURL from '../../helpers/environment';


type Props = {
    sessionToken: string | null,
    id: number
}

type State = {
    modalOpen: boolean
}

class LandlordDelete extends React.Component<Props, State> {
    constructor(props: Props){
    super(props);
    this.state = {
        modalOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.deleteLandlord = this.deleteLandlord.bind(this);

    }
    deleteLandlord = async() => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try{
        const res = await fetch(`${APIURL}/landlord/${this.props.id}/admin`, {
            method: "DELETE",
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
            <Button onClick={this.toggle}>Delete</Button>
            <Modal isOpen={this.state.modalOpen} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Delete Landlord</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this landlord?
                </ModalBody>
                <ModalFooter>
                <Button color="primary"onClick={this.deleteLandlord}>Delete</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
        );
    }
}

export default LandlordDelete;