import App from './components/home';
import Calculator from './components/calc';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const RouteInfo = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Calculator} />
        </Router>
    </Provider>
);

export default RouteInfo;