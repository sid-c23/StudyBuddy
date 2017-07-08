import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import StudyApp from './StudyApp';
import StudyAppHome from './StudyAppHome'
import StudyAppAccount from './StudyAppAccount'


class BodyPage extends Component {
	
  render() {
  	const navStyle = {
		paddingRight: '20px'
	}
    return (
      <BrowserRouter>
      <div>
      <nav>
      	<div className="nav-wrapper grey darken-3">
      		<a href="#" className="brand-logo hide-on-med-and-down"><i className="material-icons teal-text text-lighten-3 right">question_answer</i></a>
      		<a href="#" className="brand-logo center">Study Buddy</a>
      		<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      		<ul id="nav-mobile" className="right hide-on-med-and-down" style={navStyle}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/app/home">App</Link></li>
      </ul>
    	<ul className="side-nav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/app/home">App</Link></li>
          </ul>
      	</div>
      </nav>
      	<Route exact path="/" component={HomePage}></Route>
		<Route path="/login" component={LoginPage} ></Route>
		<Route path="/app" component={StudyApp}></Route>
	</div>

      </BrowserRouter>
    );
  }
}

export default BodyPage;
