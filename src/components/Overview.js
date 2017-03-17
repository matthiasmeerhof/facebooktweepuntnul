import React, { Component } from 'react';
import Post from './Post';

class Overview extends Component {
    render() {
        let posts = this.props.posts.map((post) => (<Post post={post} />));
        return (
            <div className="posts">{posts}</div>
        );
    }
}

export default Overview;