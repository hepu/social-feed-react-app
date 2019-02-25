import {
  POSTS_STANDBY,
  POSTS_FETCHING,
  POSTS_MOUNTING,
  POSTS_ERROR
} from './actionTypes'

export function get(url, params) {
  return (dispatch, getState, { Api }) => {
    dispatch({ type: POSTS_FETCHING })

    Api.getPosts(url, params).then((response) => {
      dispatch({
        type: POSTS_MOUNTING,
        payload: {
          items: response,
          params,
          requested_at: new Date()
        }
      })

      dispatch({ type: POSTS_STANDBY })
    }).catch((error) => {
      dispatch({ type: POSTS_ERROR, payload: { error } })
    })
  }
}
