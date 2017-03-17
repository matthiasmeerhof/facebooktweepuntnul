import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Tmp from './components/Tmp';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            posts : []
        };
        this.postHandler = this.postHandler.bind(this);
    }

    postHandler(post, title){
        let posts = this.state.posts;
        let newPost = {
            title : title,
            post: post,
            author: this.state.name,
            comments: [],
            likes : 0
        };
        posts.push(newPost);
        this.setState({
            name : this.state.name,
            posts : posts
        });
        console.log(this.state);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Tmp}/>
                    <Route path="/add" component={() => (<PostForm postHandler={this.postHandler} />)} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
