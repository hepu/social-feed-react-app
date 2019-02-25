import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import './App.css'
import store from './config/store'
import Feed from './screens/Feed'

export default class App extends Component {
  static propTypes = {
    postsLimit: PropTypes.number,
    updateInterval: PropTypes.number,
    feedUrl: PropTypes.string
  }

  static defaultProps = {
    postsLimit: 5,
    updateInterval: 5000,
    feedUrl: 'http://api.massrelevance.com/MassRelDemo/kindle.json'
  }

  render() {
    const {
      postsLimit,
      updateInterval,
      feedUrl
    } = this.props

    return (
      <Provider store={store}>
        <Feed
          limit={postsLimit}
          updateInterval={updateInterval}
          feedUrl={feedUrl}/>
      </Provider>
    )
  }
}
