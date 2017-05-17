import React, { Component } from 'react';
import './TopRow.css';
import SharingButtons from './SharingButtons';
import image from './web_cph.png';

export default class TopRow extends Component {
  render() {
    return (
      <div className="TopRow-container">
        <div className="TopRow-row1">
          <div className="TopRow-row1-left">
            <span className="TopRow-name">Nu</span>
            <span className="TopRow-slogan">Events. Today.</span>
            <SharingButtons />
          </div>
          <div className="TopRow-row1-right">
            <div className="TopRow-row1-right-image">
              <img alt="screenshot" src={image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
