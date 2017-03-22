// React-stuff
import React, { Component } from 'react';
// CSS
import './App.css';
// Components
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
            </div>
        )
    }
}

export default App;
