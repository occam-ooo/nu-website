import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <li><Link to="/tos">Terms and Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
    );
  }
}
