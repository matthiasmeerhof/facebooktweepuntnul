import {createStore} from 'redux';
import allReducers from './reducers/index';

const Store = createStore(allReducers);
export default Store;