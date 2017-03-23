import {combineReducers} from 'redux';
import PostsReducer from './reducer-posts';
import ProfileReducer from './reducer-profile'
import SearchReducer from './reducer-search'

const allReducers = combineReducers({
    posts : PostsReducer,
    user : ProfileReducer,
    search : SearchReducer
});

export default allReducers;
