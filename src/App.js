// React-stuff
import React, { Component } from 'react';


// CSS
import './App.css';

import NavBar from './components/NavBar';
import Overview from './components/Overview';

class App extends Component {
    constructor(props) {
        super(props);
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
        return (
            <div className="App">
                <NavBar />
            </div>
        )
    }
}

export default App;
