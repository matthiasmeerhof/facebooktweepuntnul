import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import PrivateRoute from  './customRoutes/PrivateRoute';

// Components
import App from './App';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Profile from './components/Profile';
import Overview from './components/Overview';

//Store
import Store from './store';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App} />
                <PrivateRoute exact path="/" component={Overview} />
                <PrivateRoute path="/add" component={PostForm} />
                <PrivateRoute path="/profile/:user" component={Profile} />
                <Route path="/login" component={Login} />
            </div>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
