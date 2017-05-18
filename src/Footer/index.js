import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer-container">
        <ul>
          <li>Home</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}
