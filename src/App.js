// React-stuff
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

// CSS
import './App.css';

// Components
import PostForm from './components/PostForm';
import Overview from './components/Overview';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

class App extends Component {
    constructor() {
        super();
        if(localStorage.getItem("posts") === null) {
            localStorage.setItem("posts", JSON.stringify([]));
        }
        if(localStorage.getItem("name") !== null) {
            localStorage.setItem("name", 'Brent Lobbezoo');
        }
        this.postHandler = this.postHandler.bind(this);
    }

    postHandler(post, title){
        let posts = JSON.parse(localStorage.getItem('posts'));
        let newPost = {
                title : title,
                post: post,
                author: localStorage.getItem('name'),
                comments: [],
                likes : 0
            };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={NavBar} />
                    <Route exact path="/" component={() => (<Overview posts={JSON.parse(localStorage.getItem('posts'))} />)}/>
                    <div className="container overall">
                        <Route path="/add" component={() => (<PostForm postHandler={this.postHandler} />)} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile/:user" component={Profile} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
