import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth';
import ProfileHandler from '../utils/ProfileHandler';
import PostsHandler from '../utils/PostsHandler';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search : ''
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleLogOut(e) {
        Auth.logout();
        this.props.history.push("/login");
    }

    handleSearch(e){
        e.preventDefault();
        let allPosts = PostsHandler.GetPosts();
        let posts = [];
        allPosts.forEach((post) => {
            console.log(this.state.search);
            if(post.title.toLowerCase().includes(this.state.search.toLowerCase())) {
                posts.push(post);
            }
        });
        this.props.handler(posts);
    }

    handleOnChange(e){
        e.preventDefault();
        this.setState({
            search : e.target.value
        })
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
                    <form className="navbar-form navbar-right" onSubmit={this.handleSearch}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" onChange={this.handleOnChange} />
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavBar;
