

const initialState = {
	loggingIn: false,
	loggedIn: false,
	error: null,
	user: {
		id: null,
		first_name: null,
		username: null,
		email: null
	},
	token: null,
	creating: false,
	created: false,
	fetching_token: false
}

export default function reducer(state=initialState, action) {
	switch(action.type) {

		case 'FETCH_USER_START': {
			state = {...state, loggingIn: true}
			break;
		}
		case 'RECEIVED_USER': {
			state = {...state, loggingIn: false, loggedIn: true, user: action.payload}
			break;
		}
		case 'FETCH_USER_ERROR': {
			state = {...state, loggingIn: false, error: action.payload}
			break;
		}
		case 'TOKEN_FETCHED': {
			state = {...state, fetching_token: false, token: action.payload}
			break
		}
		case 'CREATE_USER_START': {
			state = {...state, creating: true}
			break;
		}
		case 'CREATED_USER': {
			state = {...state, creating: false, created: true}
			break;
		}
		case 'FETCHING_TOKEN': {
			state = {...state, fetching_token: true}
			break;
		}
		default: {
			return state
		}
	}
	return state

}