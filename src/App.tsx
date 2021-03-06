import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Nav";
import Auth from "./components/Auth";
import Home from "./components/Home";

type AppState = {
  sessionToken: string | null,
  sessionID: number | null,
  admin: boolean,
  isUserAuthenticated: boolean
  }
  
  type Props = {
  
  }
  
  class App extends React.Component <Props, AppState> {
    constructor(props: Props){
      super(props);
      this.state={
        sessionToken: null,
        sessionID: null,
        admin: false,
        isUserAuthenticated: false
      }
      this.updateToken = this.updateToken.bind(this);
      this.clearSession = this.clearSession.bind(this);
    }
  
    componentDidMount(){
      if(localStorage.getItem('token')){
        this.setState({sessionToken: localStorage.getItem('token'), isUserAuthenticated: true})
      }
    }
  
    updateToken(newToken: string, newUserId: number, isAdmin: boolean){
      localStorage.setItem('token', newToken);
      localStorage.setItem('userId', newUserId.toString());
      if(isAdmin){
        localStorage.setItem("admin", "true");
      } else {
        localStorage.setItem("admin", "false");
      }
      this.setState({sessionToken: newToken, sessionID: newUserId, admin: isAdmin, isUserAuthenticated: true})
    }
  
    clearSession(){
      localStorage.clear();
      this.setState({sessionToken: '', isUserAuthenticated: false})
    }
  
    protectedViews(){
      // return(
      //   <Router>
      //     <Navbar />
          
      //   </Router>
      // )

      return(localStorage.token === this.state.sessionToken && this.state.sessionToken !== '' ?
        <Router>
          <Navbar clickLogout={this.clearSession} isUserAuthenticated={this.state.isUserAuthenticated} sessionToken={this.state.sessionToken} sessionID={this.state.sessionID}/>
        </Router> 
        
        : <Auth updateToken={this.updateToken} /> )
    }
    
  render(){
    let view;

    if(this.state.isUserAuthenticated){
      view = (
      <Router>
        <Navbar clickLogout={this.clearSession} isUserAuthenticated={this.state.isUserAuthenticated} sessionToken={this.state.sessionToken} sessionID={this.state.sessionID}/><h1>Component</h1>
      </Router> )
    } else {
      view = <Auth updateToken={this.updateToken} />
    }

    return (
      <div className="App">
      {view}
    
      </div>
    );
  }
}
  
  export default App;



