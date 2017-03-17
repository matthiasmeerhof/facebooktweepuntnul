import React, { Component } from 'react';
import Login from './component/Login'

class App extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className="App">
        <Login />
        <span>Status: {localStorage.getItem("loggedId")}</span>
      </div>     
    );
  }
}

export default App;
