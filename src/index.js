import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux';

import Routes from './Routes';

//Store
import Store from './store';

ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>,
  document.getElementById('root')
);
