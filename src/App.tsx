import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Nav";
import Auth from "./components/Auth";
import Home from "./components/Home";

type AppState = {
  sessionToken: string | null,
  sessionID: number | null,
  sessionRole: string,
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
        sessionRole: '',
        isUserAuthenticated: false
      }
      this.updateToken = this.updateToken.bind(this);
      this.clearSession = this.clearSession.bind(this);
      this.getUserId = this.getUserId.bind(this);
    }
  
    componentDidMount(){
      if(localStorage.getItem('token')){
        this.setState({sessionToken: localStorage.getItem('token'), isUserAuthenticated: true})
      }
    }
  
    updateToken(newToken: string, newUserId: number, newRole: string){
      localStorage.setItem('token', newToken);
      localStorage.setItem('userId', newUserId.toString());
      localStorage.setItem('role', newRole)
      this.setState({sessionToken: newToken, sessionID: newUserId, sessionRole: newRole, isUserAuthenticated: true})
    }

    getUserId() {
      return this.state.sessionID;
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
          <Navbar clickLogout={this.clearSession} isUserAuthenticated={this.state.isUserAuthenticated} sessionToken={this.state.sessionToken} sessionID={this.getUserId}/>
        </Router> 
        
        : <Auth updateToken={this.updateToken} /> )
    }
    
  render(){
    let view;

    if(this.state.isUserAuthenticated){
      view = (<Router>
      <Navbar clickLogout={this.clearSession} isUserAuthenticated={this.state.isUserAuthenticated} sessionToken={this.state.sessionToken} sessionID={this.getUserId}/><h1>Component</h1>
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



