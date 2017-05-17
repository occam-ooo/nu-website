import React, { Component } from 'react';
import Header from '../Header';
import TopRow from '../TopRow';

export default class Main extends Component {
    render() {
        return (
            <div className="Main-container">
                <Header /><TopRow />
            </div>
        );
    }
}
