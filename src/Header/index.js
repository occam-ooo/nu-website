import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header-container">
                <div className="Header-with-love">
                    <p>
                        Made with
                        <Icon className="love" name="heart" />
                        by an indie developer.
                    </p>
                </div>
                <div className="Header-sharing-container">
                    <div className="Header-sharing-socialnetwork debug">
                        <Icon name="facebook square" size="large" />
                    </div>
                    <div className="Header-sharing-socialnetwork debug">
                        <Icon name="twitter square" size="large" />
                    </div>
                </div>
            </div>
        );
    }
}
