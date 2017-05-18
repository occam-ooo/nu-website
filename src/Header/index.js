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
                        by an
                        {' '}
                        <a href="https://www.pedromadruga.com/">
                            {' '}indie developer{' '}
                        </a>
                        .
                    </p>
                </div>
                <div className="Header-sharing-container">
                    <div className="Header-sharing-socialnetwork">
                        <a href="https://www.instagram.com/nueventstoday/">
                            <Icon name="instagram square" size="large" />
                        </a>
                    </div>
                    <div className="Header-sharing-socialnetwork">
                        <a href="https://www.facebook.com/nutodaysevents">
                            <Icon name="facebook square" size="large" />
                        </a>
                    </div>
                    <div className="Header-sharing-socialnetwork">
                        <a href="https://twitter.com/nueventstoday">
                            <Icon name="twitter square" size="large" />
                        </a>
                    </div>
                    <div className="Header-sharing-socialnetwork">
                        <a href="https://nueventstoday.tumblr.com/">
                            <Icon name="tumblr square" size="large" />
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}
