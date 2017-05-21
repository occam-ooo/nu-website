import React, { Component } from 'react';
import Header from '../Header';
import TopRow from '../TopRow';
import About from '../About';
import Footer from '../Footer';

import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="Home-container">
                <Header /><TopRow /><About /><Footer />
            </div>
        );
    }
}
