// React-stuff
import React, { Component } from 'react';


// CSS
import './App.css';

import NavBar from './components/NavBar';

import ProfileHandler from './utils/ProfileHandler';
import PostsHandler from './utils/PostsHandler';

class App extends Component {
    constructor() {
        super();
        if (ProfileHandler.GetProfile() === null || PostsHandler.GetPosts() === null) {
            ProfileHandler.SetupProfile();
            PostsHandler.SetupPosts();
        }
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
