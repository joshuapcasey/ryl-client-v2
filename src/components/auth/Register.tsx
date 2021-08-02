import React, { FormEvent } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Tooltip} from 'reactstrap';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import APIURL from '../../helpers/environment';


const FlexDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
const FormContainer = styled.form`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const RegisterDiv = styled.div`
    height: 100%;
`
const LoaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
type AcceptedProps={
    updateToken: (newToken: string, newUserId: number, isAdmin: boolean) => void,
    changeView: () => void,
    handleTryIt: ()=>void
}

type RegisterState={
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    admin: string,
    tooltipOpen: boolean,
    loading: boolean
}

export default class Register extends React.Component<AcceptedProps, RegisterState>{
    constructor(props: AcceptedProps){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            admin: 'User',
            tooltipOpen: false,
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState((state)=>{
            return {tooltipOpen: !state.tooltipOpen}
        })
    }
    handleSubmit(e: FormEvent){
        e.preventDefault()
        this.isLoading()
        console.log('handling submit');
        // this.toArray()
        fetch(`${APIURL}/user/register`, {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({ 
                user:{
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    emailAddress: this.state.email,
                    password: this.state.password,
                    admin: this.state.admin
                }})
        })
        .then(res => res.json())
        // .then(console.log)
        .then(data => this.props.updateToken(data.sessionToken, data.user.id, data.user.admin))
        .then(this.isLoading)
        .catch(err => console.log(err))
    }
    isLoading() {
        this.setState((state) => { return { loading: !state.loading } })
    }

    render(){
        return(
            <>
                {this.state.loading ?  <LoaderDiv>
                            <Loader type='Watch' color='#27aa9d' />
                        </LoaderDiv> :
            <RegisterDiv className='register'>

<FormContainer onSubmit={this.handleSubmit}>
                <FlexDiv>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input name='firstName' value={this.state.firstName} required onChange={(e) => this.setState({firstName: e.target.value})} />
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name='lastName' value={this.state.lastName} required onChange={(e) => this.setState({lastName: e.target.value})} />
                </FlexDiv>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name='email' type='email' value={this.state.email} required onChange={(e) => this.setState({email: e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name='password' id='password' type='password' pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'value={this.state.password} required onChange={(e) => this.setState({password: e.target.value})} />
                    <Tooltip placement='right' isOpen={this.state.tooltipOpen} target='password' toggle={this.toggle}>Password must: <ul>
                        <li>Be at least 8 characters</li>
                        <li>Contain at least 1 Uppercase letter</li>
                        <li>Contain at least 1 Number</li>
                        <li>May contain special characters (not required)</li>
                        </ul></Tooltip>
                </FormGroup>
                <button type='submit'>Sign Up</button>
                <br />
            </FormContainer>
                <p>Already have an account?</p>
                <button onClick={this.props.changeView}>Login</button>

            </RegisterDiv>
            }
            </>
        )
    }

}
    {/* <Form> */}
     {/* <FormGroup>
        <Label for="exampleEmail">Input without validation</Label>
        <Input />
        <FormFeedback>You will not be able to see this</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Valid input</Label>
        <Input valid />
        <FormFeedback valid>Sweet! that name is available</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Invalid input</Label>
        <Input invalid />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Input without validation</Label>
        <Input />
        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup className="position-relative">
        <Label for="exampleEmail">Valid input</Label>
        <Input valid />
        <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup className="position-relative">
        <Label for="examplePassword">Invalid input</Label>
        <Input invalid />
        <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
    </Form> */}





// import React, { Component } from 'react';


// type AcceptedProps = {
    
// }

// type RegisterState = {
    

// }

// export default class Register extends Component  <AcceptedProps, RegisterState> {
//     constructor(props: AcceptedProps) {
//     super(props);
//     // this.state = {
//     }

//     render () {
//         return (
//             <div className="Container">
//                 <div className="RegisterWrapper">
//                register page
//                 </div>
//             </div>
//         )
//     }

// }