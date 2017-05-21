import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  renderCopyRightYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="Footer-container">
        <ul>
          <li>
            <a href="https://occam.ooo">
              (c) Occam (Denmark).
              {' '}
              {this.renderCopyRightYear()}
              . All rights reserved.
            </a>
          </li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    );
  }
}
