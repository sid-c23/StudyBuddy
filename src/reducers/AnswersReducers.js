
const initialState = {
	fetching: false,
	fetched: false,
	error: null,
	answers: []
}


export default function reducer(state=initialState, action) {
	switch(action.type) {

		case 'FETCH_ANSWERS_START': {
			state = {...state, fetching: true}
			break;
		}
		case 'RECEIVE_ANSWERS': {
			state = {...state, fetching:false, fetched: true, answers: action.payload}
			break;
		}
		case 'FETCH_ANSWERS_ERROR': {
			state - {...state, fetching: false, error: action.payload}
			break
		}
		default: {
			return state
		}

	}
	return state
	
}