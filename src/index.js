import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import ToS from './ToS';
import Privacy from './Privacy';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const Index = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/tos" component={ToS} />
            <Route path="/privacy" component={Privacy} />
        </div>
    </Router>
);

ReactDOM.render(<Index />, document.getElementById('root'));
