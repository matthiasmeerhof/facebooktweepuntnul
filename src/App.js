import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Overview from './components/Overview';
import Login from './components/Login'

class App extends Component {
    constructor() {
        super();
        let name = '';
        let posts = [];
        if(localStorage.getItem("posts") !== null) {
            posts = JSON.parse(localStorage.getItem("posts"));
        } else {
            localStorage.setItem("posts", JSON.stringify([]));
        }
        if(localStorage.getItem("name") !== null) {
            name = localStorage.getItem("name");
        } else {
            localStorage.setItem("name", '');
        }
        this.state = {
            name : name,
            posts : posts
        };
        this.postHandler = this.postHandler.bind(this);
    }

    postHandler(post, title){
        let posts = JSON.parse(localStorage.getItem('posts'));
        let newPost = {
                title : title,
                post: post,
                author: this.state.name,
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
                    <Route exact path="/" component={() => (<Overview posts={this.state.posts} />)}/>
                    <Route path="/add" component={() => (<PostForm postHandler={this.postHandler} />)} />
                    <Route path="/login" component={Login} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
