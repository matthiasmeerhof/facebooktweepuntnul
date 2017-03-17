import React, { Component } from 'react';

class Post extends Component {
    render() {
        return(
            <div className="post">
                <div>
                    <span className="title">{this.props.post.title}</span>
                </div>
                <div>
                    <span className="post">{this.props.post.post}</span>
                </div>
            </div>
        )
    }
}

export default Post;