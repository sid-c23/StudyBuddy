import axios from 'axios';

export function getQuestions() {


	return function(dispatch) {
		dispatch({
			type: 'FETCH_QUESTIONS_START'
		})
		axios.get('http://entrepreneur.ddns.net/api/questions/view')
			.then((res) => {
				const questions = res.data
				dispatch({
					type: 'RECEIVE_QUESTIONS',
					payload: questions
				})
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_QUESTIONS_ERROR',
					payload: err
				})
			})
	}
}