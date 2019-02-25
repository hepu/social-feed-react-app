import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as postsActions from '../../actions/posts'
import Post from '../../components/Post'

import './style.css';

class Feed extends Component {
  static propTypes = {
    limit: PropTypes.number,
    updateInterval: PropTypes.number,
    feedUrl: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      fetchInterval: null,
      last_post_entity_id: null
    }

    this.fetchPosts = this.fetchPosts.bind(this)
  }

  componentDidMount() {
    this.fetchPosts()
    this.setState({ fetchInterval: setInterval(this.fetchPosts, this.props.updateInterval) })
  }

  componentWillUnmount() {
    clearInterval(this.state.fetchInterval)
  }

  fetchPosts() {
    const {
      limit,
      feedUrl,
      postsActions,
      posts
    } = this.props
    const lastItem = posts.items.slice(-1)[0]

    if (lastItem) {
      this.setState({ last_post_entity_id: lastItem.entity_id })
      postsActions.get(feedUrl, { limit, start_id: lastItem.entity_id })
    } else {
      postsActions.get(feedUrl, { limit, start_id: this.state.last_post_entity_id })
    }
  }

  render() {
    const {
      posts
    } = this.props

    return (
      <div className="Feed">
        {posts.items.map((post, index) => {
          return <Post key={index} {...post}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
