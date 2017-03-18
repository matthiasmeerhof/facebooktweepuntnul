import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class Post extends Component {
    render() {
        return(
            <div>
                <div>
                    <div>
                        <span className="title"><b>{this.props.post.title}</b></span>
                    </div>
                    <div>
                        <span className="post">{this.props.post.post}</span>
                    </div>
                    <div className="options">
                        <span><small>comment</small></span>
                        <span><small>like <Glyphicon glyph="glyphicon glyphicon-thumbs-up"/></small></span>
                    </div>
                </div>
                <hr className="postSeperator" />
            </div>
        )
    }
}

export default Post;