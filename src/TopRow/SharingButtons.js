import React, { Component } from 'react';
import './SharingButtons.css';
import android from './play_store.png';
import ios from './apple_badge.svg';

export default class SharingButtons extends Component {
  render() {
    return (
      <div className='SharingButtons-container'>
        <div className='SharingButtons-appstore-ios'>
          <a
            href='https://itunes.apple.com/dk/app/nu-curated-events-today-in-copenhagen/id1104697859?mt=8'
            target='_blank'
          >
            <img alt='ios' src={ios} />
          </a>
        </div>

        <div className='SharingButtons-appstore-android'>
          <a
            href='https://play.google.com/store/apps/details?id=com.occam.mobile.android.nu&hl=en'
            target='_blank'
          >
            <img alt='android' src={android} />
          </a>
        </div>
      </div>
    );
  }
}
