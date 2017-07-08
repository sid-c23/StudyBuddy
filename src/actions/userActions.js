
import axios from 'axios'

export function logInUser(username, password) {
	return function(dispatch) {
		dispatch({
			type: 'FETCH_USER_START'
		})
		const authOptions = {
		    method: 'POST',
		    url: 'http://entrepreneur.ddns.net/api/auth/token/',
		    data: {
		    	"username": username,
		    	"password":password
		    },
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    json: true
		  };
		axios(authOptions)
		 .then((res) => {
		 	let authToken = res.data.token
		 	dispatch({
		 		type: 'FETCH_USER_TOKEN',
		 		payload: authToken
		 	})
		 	console.log(res.data)
		 })
		 .catch((err) => {
		 	dispatch({
		 		type: 'FETCH_USER_ERROR',
		 		payload: err
		 	})
		 }) 

	}
}







export function registerUser(newUser) {

	let {first_name, email, email2, username, password} = newUser

	if(email===email2) {
		return function(dispatch) {
		dispatch({
			type:'CREATE_USER_START'
		})
		let authOptions = {
		    method: 'POST',
		    url: 'http://entrepreneur.ddns.net/api/users/register/',
		    data: {
		    	"first_name":first_name,
		    	"email":email,
		    	"email2": email2,
		    	"username":username,
		    	"password":password
		  //   	"first_name": "Joe",
				// "username":"joe2",
				// "password": "joe",
				// "email":"joe2@gmail.com",
				// "email2":"joe2@gmail.com"
		    },
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    json: true
		  };
		 axios(authOptions)
		 .then((res) => {
		 	console.log(res.data)
		 	dispatch({
		 		type: 'CREATED_USER'
		 	})
		 	dispatch({
		 		type:'FETCHING_TOKEN'
		 	})
		 	authOptions = {
		    method: 'POST',
		    url: 'http://entrepreneur.ddns.net/api/auth/token/',
		    data: {
		    	"username":username,
		    	"password":password
		    },
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    json: true
		  };
		  axios(authOptions)
		  	.then((res) => {
		  		let userToken = res.data.token
		  		console.log(userToken)
		  		dispatch({
		  			type: 'TOKEN_FETCHED',
		  			payload:userToken
		  		})
		  	})
		  	.catch((err) => {
		  		dispatch({
		  			type: 'FETCH_USER_ERROR',
		  			payload: err
		  		})
		  	})


		 })
		 .catch((err) => {
		 	dispatch({
		 		type: 'FETCH_USER_ERROR',
		 		payload: err
		 	})
		 })

	}
} else {
	return console.log('something went wrong')
}

	
	
} 