import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import SignIn from './SignIn';
import MapContainer from './MapContainer';
import Locations from './Locations';


class App extends Component {

  constructor() {
    super();
    this.state = {
      isSignedIn: false
    }
  }

  loadUser = (data) => {
    this.setState( {
      isSignedIn: data
    })
  }

  render() {
    return (
      <div className='App'>
        { this.state.isSignedIn ?
          <div>
            <Router>
              <nav className="pa3 pa4-ns">
                <Link to='/map' className="link dim black  f6 f5-ns dib mr3">Map</Link>
                <Link to='/locations/' className="link dim black   f6 f5-ns dib mr3" >Locations</Link>
              </nav>

              <Route exact={true} path="/map"  render={() => (<MapContainer/>)}/>
              <Route path="/locations/" render={() => (<Locations/>)} />
            </Router>
          </div> :
        <SignIn loadUser={this.loadUser} />}
      </div>
    );
  }
}

export default App;
