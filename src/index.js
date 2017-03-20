import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

// Components
import App from './App';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Profile from './components/Profile';
import Overview from './components/Overview';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={Overview} />
      <Route path="/add" component={PostForm} />
      <Route path="/login" component={Login} />
      <Route path="/profile/:user" component={Profile} />
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
