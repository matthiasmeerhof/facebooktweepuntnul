import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../Auth';

export default class PrivateRoute extends React.Component {
    render() {
        let {component, ...rest} = this.props;
        return (
            <Route {...rest}
                render={props => (Login.loggedIn ?
                    React.createElement(component, props) :
                    <Redirect to={{ pathname: '/login' }} />)} />
        )
    }
}

