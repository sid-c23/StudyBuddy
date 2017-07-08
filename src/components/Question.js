import React, { Component } from 'react';



class Question extends Component {
  render() {
    
    return (
      <div className="row">
      	<div className="col s12 m6">
      		<div className="card teal darken-1">
      			<div className="card-content white-text">
      				<span className="card-title">{this.props.question.questionHead}</span>
      				<p className="truncate">{this.props.question.questionBody}</p>
      			</div>
      			<div className="card-action">
					<a href="#" className="hide-on-med-and-down" >Answer</a>
					<a href="#" className="">View thread</a>
      			</div>
      		</div>
      	</div>	
      </div>
    );
  }
}

export default Question;
