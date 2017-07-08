import React, { Component } from 'react';
import Question from './Question';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as questionActions from '../actions/questionActions'
import { BrowserRouter, Route } from 'react-router-dom'

class StudyAppHome extends Component {
	componentWillMount() {
		this.props.dispatch(questionActions.getQuestions())
		
	}


	render() {
		let questionsList = this.props.questions.questions


	let renderQuestions = questionsList.map((question) => (
			<Question key={question.id} question={question} />
	
		))

		return (

		<div>
		<div className="col m9 s12">
			{ renderQuestions }
      	</div>
		
		<div className="fixed-action-btn">
			<a className="btn-floating btn-large teal">
				<i className="material-icons">add</i>
			</a>
			<ul>
				<li><a className="btn-floating btn-large red"><i className="material-icons">announcement</i></a></li>
				<li><a className="btn-floating btn-large green"><i className="material-icons">mode_edit</i></a></li>
			</ul>
		</div>
		</div>
			)
	}
}
function mapStateToProps(state) {
	return {
		questions: state.question,
		
	}
}

export default connect(mapStateToProps)(StudyAppHome)