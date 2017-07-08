import React, { Component } from 'react';


class LoginPage extends Component {
  render() {

    return (
      <div className="container">
      <br/><br/>
      	<div className="row">
      		<div className="col m4 s12">
      			<h4 className="flow-text">Login to join the conversation.</h4>
      		</div>
      		
  			<form className="col m8 s12">
  				<div className="input-field col s12">
  					<input id="username" type="text" className="validate" required />
  					<label htmlFor="email">Username</label>
				</div>
				<div className="input-field col s12">
  					<input id="password" type="password" className="validate" required />
  					<label htmlFor="password">Password</label>
				</div>
				<button className="btn waves-effect waves-light teal lighten-1 right">Login</button>
  			</form>
      		
      	</div>
      </div>
    );
  }
}

export default LoginPage;
