import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header-container">
                <div className="Header-socialnetwork debug">Facebook</div>
                <div className="Header-socialnetwork debug">Twitter</div>
            </div>
        );
    }
}
