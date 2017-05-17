import React, { Component } from 'react';
import './SharingButtons.css';
import android from './play_store.png';
import ios from './apple_badge.svg';

export default class SharingButtons extends Component {
  render() {
    return (
      <div className="SharingButtons-container">
        <div className="SharingButtons-appstore-ios">
          <img alt="ios" src={ios} />
        </div>

        <div className="SharingButtons-appstore-android">
          <img alt="android" src={android} />
        </div>
      </div>
    );
  }
}
