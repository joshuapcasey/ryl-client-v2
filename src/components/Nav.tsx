import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link, Switch, Route } from 'react-router-dom';

// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import Home from "./Home";
// import Landlord from "./landlord/LandlordDisplay";
// import Profile from "./user/UserDisplay";

type AcceptedProps = {
    // clickLogout: () => void,
    // isUserAuthenticated: boolean
}


export default class NavBar extends Component <AcceptedProps, {}> {
    constructor(props: AcceptedProps) {
        super (props)
        
    }

    render () {
        return (
            <div className="navbar">
                <div className="navbar-link">
                    <Navbar color="dark" dark expand="md">
                        <Nav className="ml-auto">
                            <NavItem>
                                <Link to="/login" className="site-link">Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/register" className="site-link">Register</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/home" className="site-link">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/landlords" className="site-link">Landlords </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/Profile" className="site-link"> Profile</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/" className="site-link"> placeholder</Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        );
    };
}



    //! NAVBAR 2
// export default class NavBar extends Component <AcceptedProps, {}> {
//     constructor(props: AcceptedProps) {
//         super (props)
        
        
//     }

//     render () {
//         return (
//             <div className="navbar">
//                 <div className="navbar-link">
//                     <Navbar color="dark" dark expand="md">
//                         <Nav className="ml-auto">
//                             <NavItem>
//                                 <Link to="/login" className="site-link">Login</Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/register" className="site-link">Register</Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/home" className="site-link">Home</Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/landlords" className="site-link">Landlords </Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/Profile" className="site-link"> Profile</Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link to="/" className="site-link"> placeholder</Link>
//                             </NavItem>
//                         </Nav>
//                     </Navbar>
//                 </div>
//                 <div className="navbar-routes">           
//                     <Switch>
//                         <Route exact path="/login" component={ Login } />
//                         <Route exact path="/register" component={ Register } />
//                         <Route exact path="/home" component={ Home } />
//                         <Route exact path="/landlord" component={ Landlord } />
//                         <Route exact path="/profile" component={ Profile } />
//                     </Switch>
//                 </div>
//             </div>
//         );
//     };
// }