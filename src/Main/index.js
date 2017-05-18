import React, { Component } from 'react';
import Header from '../Header';
import TopRow from '../TopRow';
import About from '../About';
import Footer from '../Footer';

import './Main.css';

export default class Main extends Component {
    render() {
        return (
            <div className="Main-container">
                <Header /><TopRow /><About />
            </div>
        );
    }
}
