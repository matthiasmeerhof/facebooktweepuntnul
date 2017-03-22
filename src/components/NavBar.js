import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
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
                            <li><NavLink activeClassName="selected" to="/">Logout</NavLink ></li>
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

export default connect(mapStateToProps)(NavBar);
