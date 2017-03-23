import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index';
import { bindActionCreators } from 'redux';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e){
        e.preventDefault();
        this.props.logout();
    }

    render() {
        let profileUrl = '/profile/' + encodeURI('tmpname');
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink activeClassName="selected" className="navbar-brand" to="/">Facebook 2.0</NavLink ></li>
                            <li><NavLink activeClassName="selected" to="/add">Nieuw bericht</NavLink ></li>
                            <li><NavLink activeClassName="selected" to={profileUrl} >Profiel</NavLink ></li>
                            <li><NavLink activeClassName="selected" onClick={this.handleLogOut} to="/">Logout</NavLink ></li>
                        </ul>
                    </div>
                    <form className="navbar-form navbar-right">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout : logout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
