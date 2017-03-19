// React-stuff
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

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
        if (localStorage.getItem("posts") === null) {
            localStorage.setItem("posts", JSON.stringify([]));
        }
        if (localStorage.getItem("name") !== null) {
            localStorage.setItem("name", 'Brent Lobbezoo');
        }
        this.state = {
            loggedIn: false
        }
        this.postHandler = this.postHandler.bind(this);
    }

    postHandler(post, title) {
        let posts = JSON.parse(localStorage.getItem('posts'));
        let newPost = {
            key: posts.length,
            title: title,
            post: post,
            author: localStorage.getItem('name'),
            comments: [],
            likes: 0
        };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    login() {
        this.setState({
            loggedIn: true
        })

    }

    render() {
        let loggedIn = this.state.loggedIn;
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route exact path="/" component={() => loggedIn ? (<Overview posts={JSON.parse(localStorage.getItem('posts'))} />) : <Redirect to="/login" />} />
                    <div className="container overall">
                        <Route path="/add" component={() => loggedIn ? (<PostForm postHandler={this.postHandler} />) : <Redirect to="/login" />} />
                        <Route path="/login" component={(prop) => <Login route={prop} login={this.login.bind(this)} />} />
                        <Route path="/profile/:user" component={() => loggedIn ? (<Profile />) : <Redirect to="/login" />} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
