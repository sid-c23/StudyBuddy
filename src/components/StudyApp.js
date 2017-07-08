import React, { Component } from 'react';




class StudyApp extends Component {

	

  render() {
  	const outDivStyle = {
  		minHeight: '800px'
  	}
  
  	


  	const sideBarStyle = {
  		minHeight: '500px',

  	}

    return (
      <div className="row" style={outDivStyle}>
      	<div className="col s12 m3 grey lighten-3" style={sideBarStyle}>
      		<div className="card grey lighten-4">
      			<div className="card-content blue-grey-text text-darken-1">
      				<span className="card-title">Hello, Sid</span>
      			</div>
      			<div className="card-action">
					<a href="/app/account">Click to view your account</a>
					
      			</div>
      		</div>
      		<div className="collection">
				<a className="collection-item">Questions Asked: </a>
				<a className="collection-item">Answers Submitted: </a>
      		</div>
      	</div>

		
		<div>
      	
		</div>
      
      </div>
    );
  }
}



export default StudyApp;

