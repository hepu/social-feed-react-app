import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

import Api from '../lib/Api'
import initialState from './initialState'

const createStoreWithMiddleware = applyMiddleware(
  thunk.withExtraArgument({ Api })
)(createStore)

export default createStoreWithMiddleware(reducer, initialState)
