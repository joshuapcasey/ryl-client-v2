import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom';

import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Home";
import Landlord from "./landlord/LandlordDisplay";
import Profile from "./user/UserDisplay";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Review from './reviews/ReviewDisplay';
import LandlordDisplay from './landlord/LandlordDisplay';

type AcceptedProps = {
    clickLogout: () => void,
    isUserAuthenticated: boolean,
    sessionToken: string | null,
    sessionID: number | null,
    
}

const Logo = styled.img`
height: 200px;
width: 200px;
/* margin-top: 0% auto; */
display: flex;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;
`

const LOButton = styled.button`
    color: #666666;
    background-color: transparent;
    border: none;
    &:hover {
        color: #1276D3
    }
`

const NavBar = (props: AcceptedProps) => {


        return (
            <div className="navbar">
                <h1>This is the nav</h1>
            <NavbarBrand href="/">
                logo goes here
            </NavbarBrand>
                <div className="navbar-link">
                    <Navbar color="dark" dark expand="md">
                        <Nav className="ml-auto">
                            {/* <NavItem>
                                <Link to="/login" className="site-link">Login</Link>
                            </NavItem> */}
                            <NavItem>
                                <Link to="/home" className="site-link">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/landlords" className="site-link">Landlords</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/reviews" className="site-link">My Reviews </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/Profile" className="site-link"> Profile</Link>
                            </NavItem>
                            <NavItem>
                            <LOButton onClick={props.clickLogout}><FontAwesomeIcon icon={faSignOutAlt} size='2x' /></LOButton>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Nav />
                    {/* <Router> */}
                    <Switch>
                        {/* <Route exact path="/login" component={ Login } /> */}
                        <Route exact path="/home" component={ Home } />
                        <Route exact path="/landlords"  ><LandlordDisplay sessionToken={props.sessionToken}/></Route>
                        <Route exact path="/reviews" ><Review sessionID={props.sessionID} sessionToken={props.sessionToken}/></Route>
                        <Route exact path="/profile" ><Profile sessionID={props.sessionID} sessionToken={props.sessionToken}/></Route>
                    </Switch>
                    {/* </Router> */}
                </div>
            </div>
        );
}

export default NavBar;