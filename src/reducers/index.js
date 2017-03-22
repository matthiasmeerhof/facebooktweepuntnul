import {combineReducers} from 'redux';
import PostsReducer from './reducer-posts';

const allReducers = combineReducers({
    posts : PostsReducer
});

export default allReducers;
