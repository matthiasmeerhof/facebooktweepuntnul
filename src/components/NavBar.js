import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth';
import ProfileHandler from '../utils/ProfileHandler';

class NavBar extends Component {
    handleLogOut(e) {
        Auth.logout();
        this.props.history.push("/login");
    }

    render() {
        let profileUrl = '/profile/' + encodeURI(ProfileHandler.name);
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><NavLink activeClassName="selected" className="navbar-brand" to="/">Facebook 2.0</NavLink ></li>
                            <li><NavLink activeClassName="selected" to="/add">Nieuw bericht</NavLink ></li>
                            <li><NavLink activeClassName="selected" to={profileUrl} >Profiel</NavLink ></li>
                            <li><NavLink activeClassName="selected" onClick={this.handleLogOut.bind(this)} to="/">Logout</NavLink ></li>
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

export default NavBar;
