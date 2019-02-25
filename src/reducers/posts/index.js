import * as actionTypes from '../../actions/posts/actionTypes'
import initialState from './initialState'

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.POSTS_STANDBY:
      return {
        ...state,
        fetching: false,
        mounting: false,
        working: false,
        error: null
      }
    case actionTypes.POSTS_FETCHING:
      return {
        ...state,
        fetching: true,
        mounting: false,
        working: true,
        error: null,
        requested_at: new Date()
      }
    case actionTypes.POSTS_MOUNTING:
      return {
        ...state,
        items: action.payload.items,
        fetching: false,
        mounting: true,
        working: true,
        error: null
      }
    case actionTypes.POSTS_ERROR:
      return {
        ...state,
        fetching: false,
        mounting: false,
        working: false,
        error: action.payload
      }
    default:
      return {
        ...state
      }
  }
};
