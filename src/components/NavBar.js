import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, search } from '../actions/index';
import { bindActionCreators } from 'redux';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSearch(e) {
        e.preventDefault();
        if (this.state !== null && this.props.user.loggedIn) {
            this.props.search(this.state);
        }
    }

    handleKeyword(e) {
        e.preventDefault();

        this.setState({
            keyword: e.target.value
        });

    }

    render() {
        let profileUrl = '/profile/' + encodeURI(this.props.user.name);
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
                            <input type="text" onChange={this.handleKeyword.bind(this)} className="form-control" placeholder="Search" />
                        </div>
                        <button type="submit" onClick={this.handleSearch.bind(this)} className="btn btn-default">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logout,
        search: search
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
