import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  
    clearSession(){
      localStorage.clear();
      this.setState({sessionToken: '', isUserAuthenticated: false})
    }
  
  //   protectedViews(){
  //     return (

  //     );
  //     // return(localStorage.token === this.state.sessionToken && this.state.sessionToken !== '' ? 
  //     // <Router>
  //     //     <NavBar clickLogout={this.clearSession} isUserAuthenticated={this.state.isUserAuthenticated} />
  //     // </Router>
  //     // : <Auth updateToken={this.updateToken} />)
  //     {/* {this.protectedViews()} */}

  // }
    
    render(){   
      return (
        <div className="App">
          {/* <Router> */}
            <Home />
          {/* </Router> */}
        </div>
      );
    }
  }
  
  export default App;



