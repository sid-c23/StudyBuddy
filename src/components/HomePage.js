import React, { Component } from 'react';
import { registerUser } from '../actions/userActions'
import {connect} from 'react-redux'


class HomePage extends Component {
	constructor(){
		super()
		this.state = {
			first_name: '',
			email: '',
			email2: '',
			username: '',
			password: ''
		}
	}



	handleFormNameChange(e) {
		
		this.setState({
			first_name: e.target.value
		})
	}
	handleFormEmailChange(e) {
		
		this.setState({
			email: e.target.value
		})
	}
	handleFormEmail2Change(e) {
		
		this.setState({
			email2: e.target.value
		})
	}
	handleFormUsernameChange(e) {
		
		this.setState({
			username: e.target.value
		})
	}
	handleFormPasswordChange(e) {
		
		this.setState({
			password: e.target.value
		})
	}
	


	handleRegister(e) {
		e.preventDefault();
		this.props.dispatch(registerUser(this.state))
		
	}

  render() {
    return (
      <div className="container center">
      	<h2 >Ask questions, get answers. Fast.</h2>
      	<p className="flow-text">Study Buddy is a tool that connects students together.</p><br /><br />
      	<div className="row">
      		<div className="col s12 m4 center">
      		<p className="flow-text">Got a question?</p>
      		<i className="material-icons large teal-text text-accent-4">flash_on</i>

      		</div>
			<form className="col s12 m4 center" onSubmit={this.handleRegister.bind(this)}>
				<h4>Sign up now</h4>
				<div className="input-field col s12">
					<input id="first_name" type="text" className="validate" onChange={this.handleFormNameChange.bind(this)} required/>
					<label htmlFor="first_name">First Name</label>
				</div>
				<div className="input-field col s12">
					<input id="email" type="email" className="validate" onChange={this.handleFormEmailChange.bind(this)} required/>
					<label htmlFor="email">Email</label>
				</div>
				<div className="input-field col s12">
					<input id="email2" type="email" className="validate" onChange={this.handleFormEmail2Change.bind(this)} required/>
					<label htmlFor="email2">Confirm your email</label>
				</div>
				<div className="input-field col s12">
					<input id="username" type="text" className="validate" onChange={this.handleFormUsernameChange.bind(this)} required/>
					<label htmlFor="username">Enter a username</label>
				</div>
				<div className="input-field col s12">
					<input id="password" type="password" className="validate" onChange={this.handleFormPasswordChange.bind(this)} required/>
					<label htmlFor="password">Password</label>
				</div>
				<button className="btn waves-effect waves-light teal lighten-1">Sign Up <i className="material-icons right">send</i></button>
			</form>	
			<div className="col m4 s12">
			<p className="flow-text">Know the answer?</p>
			<i className="material-icons large teal-text text-accent-4">grade</i>			
			</div>
      	</div>

      </div>
    );
  }
}

function mapStateToProps(state) {
	return {

	}
}


export default connect(mapStateToProps)(HomePage)
