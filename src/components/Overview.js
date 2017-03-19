import React, { Component } from 'react';
import Post from './Post';

class Overview extends Component {
    render() {
        let posts = this.props.posts.map((post) => (<Post post={post} key={post.key} />));
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

export default Overview;