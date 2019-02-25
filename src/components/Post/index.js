import React, { Component } from 'react';
import * as linkify from 'linkifyjs';
import hashtag from 'linkifyjs/plugins/hashtag';
import Linkify from 'linkifyjs/react';
import moment from 'moment'

import './style.css';
import Avatar from '../Avatar'

// NOTE: Read hashtags from the post's text
hashtag(linkify);

export default class Post extends Component {
  render() {
    const {
      user
    } = this.props

    return (
      <div className="Post">
        <div className="Post-user-avatar">
          <Avatar user={user} />
        </div>
        <div className="Post-body">
          {this.renderUsername()}
          {this.renderContent()}
          {this.renderDate()}
        </div>
      </div>
    );
  }

  renderUsername() {
    const {
      user
    } = this.props

    return (
      <div className="Post-user">
        <span className="Post-user-name">{user.name}</span>
        <span className="Post-user-screen_name">@{user.screen_name}</span>
      </div>
    )
  }

  renderContent() {
    const {
      text
    } = this.props

    return (
      <div className="Post-text">
        <Linkify>{text}</Linkify>
      </div>
    )
  }

  renderDate() {
    const {
      created_at
    } = this.props

    return (
      <div className="Post-date">{moment(new Date(created_at)).format('D/MM/YYYY HH:MM')}</div>
    )
  }
}
