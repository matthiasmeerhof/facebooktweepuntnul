import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import PrivateRoute from  './customRoutes/PrivateRoute';

// Components
import App from './App';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Profile from './components/Profile';
import Overview from './components/Overview';
import PostsHandler from './utils/PostsHandler';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePosts : PostsHandler.GetPosts() || []
        };
        this.updateActivePosts = this.updateActivePosts.bind(this);
    }

    updateActivePosts(posts){
        this.setState({
            activePosts : posts
        })
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={() => <App handler={this.updateActivePosts}/>} />
                    <PrivateRoute exact path="/" component={() => <Overview posts={this.state.activePosts}/>} />
                    <PrivateRoute path="/add" component={() => <PostForm handler={this.updateActivePosts}/>} />
                    <PrivateRoute path="/profile/:user" component={Profile} />
                    <Route path="/login" component={Login} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
  <Index />
  ,
  document.getElementById('root')
);
