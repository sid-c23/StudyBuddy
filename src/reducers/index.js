import { combineReducers } from 'redux'

import user from './UsersReducers'
import question from './QuestionsReducers'
import answer from './AnswersReducers'

export default combineReducers({
	user,
	question,
	answer
})