import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default class Footer extends Component {
  renderCopyRightYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className='Footer-container'>
        <ul>
          <li><Link to='/'>Home</Link></li>

          <li><Link to='/tos'>Terms and Conditions</Link></li>
          <li><Link to='/privacy'>Privacy Policy</Link></li>
          <li className='Footer-copyright'>
            <a href='https://occam.ooo'>
              (c) Occam.ooo (Denmark).
              {' '}
              {this.renderCopyRightYear()}
              . All rights reserved.
            </a>
            <a href='https://github.com/occam-ooo/nu-website'>
              Source code.
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
