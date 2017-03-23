import {combineReducers} from 'redux';
import PostsReducer from './reducer-posts';
import ProfileReducer from './reducer-profile'

const allReducers = combineReducers({
    posts : PostsReducer,
    user : ProfileReducer
});

export default allReducers;
