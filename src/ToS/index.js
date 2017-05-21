import React, { Component } from 'react';

import './ToS.css';

export default class ToS extends Component {
  renderCopyRightYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="ToS-container">
        I am the ToS
      </div>
    );
  }
}
