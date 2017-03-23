import {createStore} from 'redux';
import allReducers from './reducers/index';

let reduxDevToolConnector = undefined;
if( window.__REDUX_DEVTOOLS_EXTENSION__ ) {
    reduxDevToolConnector = window.__REDUX_DEVTOOLS_EXTENSION__()
} else {
    console.log("REDUX DEVTOOLS: Not found, no connector installed on Redux Store.");
}

const Store = createStore(allReducers, reduxDevToolConnector);
export default Store;