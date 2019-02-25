import { combineReducers } from 'redux'

// Reducers
import postsReducer from './posts'

// Combine reducers
export default combineReducers({
  posts: postsReducer
})
