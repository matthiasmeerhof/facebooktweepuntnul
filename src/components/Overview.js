import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class Overview extends Component { 
    render() {
        let posts = this.props.posts.map((post, index) => (<Post post={post} key={index} />));
        return (
            <div className="container bg-fb">
                <h2>Berichten:</h2>
                <div className="posts">
                    {posts}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Overview);