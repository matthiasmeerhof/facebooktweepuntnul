import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostForm from './components/PostForm';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/add" component={PostForm} />
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);
