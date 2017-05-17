import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className="About-container">

                <Container>
                    <h3 className="About-title">About</h3>
                    <p className="About-text">
                        Nu is a mobile app that gives you events in the best places of your city, for the same day. Every day, you are able to see what's going on.
                    </p>
                    <p className="About-text">
                        Events of all sorts, from early morning to the late party event. All of this with an easy-to-use interface. We have started with Copenhagen, but don't worry, your city will be included in a snap!
                    </p>
                </Container>
            </div>
        );
    }
}
