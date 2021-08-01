import React from 'react';
import Register from './auth/Register';
import Login from './auth/Login';
import styled from 'styled-components';
// import landingGif from '../../assets/UltrasoundCoverGif.gif';
// import logoTag from '../../assets/logo-tag.png';
import Loader from 'react-loader-spinner';
import APIURL from '../helpers/environment';



const LandingDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const RegLeft = styled.div`
    height: 100vh;
    width: 50vw;
    
    padding: 5%;
`

const LoginLeft = styled.div`
    height: 100vh;
    width: 50vw;
    
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E2DBCA;
`

const Form = styled.div`
    height: 100vh;
    width: 50vw;
    padding: 5% 5%;
`

const Logo = styled.img`
    width: 30vw;
`

const Text = styled.p`
    color: #E2DBCA;
    width: 50%;
    margin: 10% auto 5% auto;
    font-size: calc(12px + 0.5vw);
`

const Heading = styled.h1`
    color: #E2DBCA;
    font-size: calc(36px + 1vw);
`

const LoaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`


type AcceptedProps = {
    updateToken: (newToken: string, newUserId: number, newRole: string) => void
}

type LandingState = {
    registerView: boolean,
    loading: boolean
}

class Auth extends React.Component<AcceptedProps, LandingState>{
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            registerView: true,
            loading: false
        }
        this.changeView = this.changeView.bind(this);
        this.handleTryIt = this.handleTryIt.bind(this)
    }

    changeView() {
        this.setState((state) => {
            return { registerView: !state.registerView }
        })
        console.log(this.state.registerView);
    }


    handleTryIt(){
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user:{
                    emailAddress: 'jdoe@gmail.com',
                    password: 'password',
                }}),
                headers: new Headers({'Content-Type': 'application/json'})
        })
        .then(res => res.json())
        // .then(console.log)
        .then(data => this.props.updateToken(data.sessionToken, data.user.id, data.user.admin))
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                {this.state.registerView ?
                    <div>
                        <LandingDiv>
                            <RegLeft>
                                {/* <Logo src={logoTag} alt="" /> */}
                                {/* <Text>lorem ipsum lorem ipum
                                    <br /> <br />
                                   lorem ipsum lorem ipsum
                                </Text> */}
                            </RegLeft>
                            <Form>
                                <Register updateToken={this.props.updateToken} changeView={this.changeView}  handleTryIt={this.handleTryIt}/>
                            </Form>
                        </LandingDiv>
                    </div>
                    :
                    <div>
                            <LandingDiv>
                                <LoginLeft>
                                    {/* <Heading>Welcome Back!</Heading> */}
                                </LoginLeft>
                                <Form>
                                    <Login updateToken={this.props.updateToken} changeView={this.changeView} />
                                </Form>
                            </LandingDiv>
                    </div>
                }
            </div>
        )
    }
}

export default Auth;