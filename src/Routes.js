import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router';

// Components
import App from './App';
import Login from './components/Login';
import PostForm from './components/PostForm';
import Profile from './components/Profile';
import Overview from './components/Overview';

class Routes extends Component {
    render() {
        let loggedIn = this.props.user.loggedIn;
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={App}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/" render={() => (loggedIn ? (<Overview />) : (<Redirect to="/login"/>))}/>
                    <Route path="/add" component={({history}) => (loggedIn ? (<PostForm history={history} />) : (<Redirect to="/login"/>))}/>
                    <Route path="/profile/:user" component={() => (loggedIn ? (<Profile />) : (<Redirect to="/login"/>))}/>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Routes);