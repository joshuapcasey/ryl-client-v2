import React, { FormEvent } from "react";
// import Logo from '../../assets/LogoWhite.png;
import styled from 'styled-components';
import { Label, Input } from "reactstrap";
import Loader from 'react-loader-spinner';
import APIURL from '../../helpers/environment';


const Logo = styled.img`
    width: 20vw;
`
const Wrapper = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const ErrorBox = styled.div`
    border: 1px solid #891A1C;
    padding: 20px;
    background-color: #F5CCCD;
    color: #891A1C;
    font-weight: bold;
`

const LoaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

type AcceptedProps = {
    updateToken: (newToken: string, newUserId: number, isAdmin: boolean) => void,
    changeView: () => void,
}

type LoginState = {
    email: string,
    password: string,
    errorDisplay: boolean,
    loading: boolean
}

export default class Login extends React.Component<AcceptedProps, LoginState>{
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorDisplay: false,
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: any) {
        e.preventDefault()
        this.isLoading()
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                }
            }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then((res) => { if (res.status === 200) { return res.json() } else { this.showErrorBox(); this.isLoading() } })
            // .then(console.log)
            .then(data => this.props.updateToken(data.sessionToken, data.user.id, data.user.admin))
            .then(this.isLoading)
            .catch(err => console.log(err))
    }

    showErrorBox() {
        this.setState({ errorDisplay: true })
    }
    isLoading() {
        this.setState((state) => { return { loading: !state.loading } })
    }

    render() {
        return (
            <Wrapper className='register'>
                {/* <Logo src={Logo} alt="" /> */}
                {this.state.errorDisplay ?
                    <ErrorBox>
                        Incorrect Email or Password
                    </ErrorBox>
                    : null}
                {this.state.loading ?
                    <LoaderDiv>
                        <Loader type='Watch' color='#1276D3' />
                    </LoaderDiv> :
                    <>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input name='email' type='email' value={this.state.email} required onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input name='password' type='password' value={this.state.password} required onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <button type='submit'>Login</button>
                            <br />
                        </form>
                        <p>No account?</p>
                        <button onClick={this.props.changeView}>Register</button>
                    </>
                }
            </Wrapper>
        )
    }

}



// import React, { Component } from 'react';


// type AcceptedProps = {
    
// }

// type LoginState = {
    

// }

// export default class Login extends Component  <AcceptedProps, LoginState> {
//     constructor(props: AcceptedProps) {
//     super(props);
//     // this.state = {
//     }

//     render () {
//         return (
//             <div className="Container">
//                 <div className="LoginWrapper">
//                login page
//                 </div>
//             </div>
//         )
//     }

// }