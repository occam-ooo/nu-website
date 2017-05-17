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
            <h1 className="TopRow-name">
              Nu
            </h1>
            <h2 className="TopRow-slogan">Events. Today.</h2>
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
