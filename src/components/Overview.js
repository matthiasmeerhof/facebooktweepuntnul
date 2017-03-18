import React, { Component } from 'react';
import Post from './Post';

class Overview extends Component {
    render() {
        let posts = this.props.posts.map((post) => (<Post post={post} key={post.title} />));
        return (
            <div className="overView">
                <h1>Berichten:</h1>
                <div className="posts">
                    {posts}
                </div>
            </div>
        );
    }
}

export default Overview;