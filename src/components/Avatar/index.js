import React, { Component } from 'react';
import './style.css';

export default class Avatar extends Component {
  render() {
    const {
      user
    } = this.props
    const {
      profile_image_url,
      screen_name
    } = user

    return (
      <div className="Avatar">
        <img alt={screen_name} src={profile_image_url} className="Avatar-image" />
      </div>
    );
  }
}
