
const initialState = {
	fetching: false,
	fetched: false,
	questions: [],
	error: null
}


export default function reducer(state=initialState, action) {

	switch(action.type) {
		case 'FETCH_QUESTIONS_START': {
			state = {...state, fetching: true}
			break;
		}
		case 'RECEIVE_QUESTIONS': {
			state = {...state, fetching:false, fetched: true, questions: action.payload}
			break;
		}
		case 'FETCH_QUESTIONS_ERROR': {
			state - {...state, fetching: false, error: action.payload}
			break;
		}
		default: {
			return state
		}
	}
	return state
}