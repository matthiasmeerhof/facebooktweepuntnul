import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import PostsHandler from '../utils/PostsHandler';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes : this.props.post.likes,
            comments : this.props.post.comments,
            show : false,
            currentComment : ''
        };
        this.addLike            = this.addLike.bind(this);
        this.showCommentBar     = this.showCommentBar.bind(this);
        this.addComment         = this.addComment.bind(this);
        this.onChangeComment    = this.onChangeComment.bind(this);
    }

    addLike() {
        let foundIndex = PostsHandler.GetPosts().findIndex(post => post.title === this.props.post.title);
        let updatePost = PostsHandler.GetPosts()[foundIndex];
        let allPosts = PostsHandler.GetPosts();
        updatePost.likes = updatePost.likes + 1;
        allPosts[foundIndex] = updatePost;
        PostsHandler.SetPosts(allPosts);
        this.setState({
            likes : updatePost.likes
        })
    }

    showCommentBar(){
        this.setState({
            show : !this.state.show
        })
    }

    onChangeComment(e){
        this.setState({
            currentComment : e.target.value
        })
    }

    addComment(e){
        e.preventDefault();
        let foundIndex = PostsHandler.GetPosts().findIndex(post => post.title === this.props.post.title);
        let updatePost = PostsHandler.GetPosts()[foundIndex];
        let allPosts = PostsHandler.GetPosts();
        updatePost.comments.push(this.state.currentComment);
        allPosts[foundIndex] = updatePost;
        PostsHandler.SetPosts(allPosts);
        this.setState({
            comments : updatePost.comments
        })
    }

    render() {
        let comments = this.state.comments.map((comment) => (<p key={comment}> > {comment} </p>));
        return(
            <div>
                <div>
                    <div className="postHeader">
                        <Glyphicon className="user-profile-icon" glyph="glyphicon glyphicon-user"/>
                        <span className="title"><p><b>{ this.props.post.author }</b> <i>plaatste een bericht</i> <b>{this.props.post.title}</b>:</p></span>
                    </div>
                    <div className="postBody">
                        <div>
                            <span className="post">{this.props.post.post} </span>
                        </div>
                    </div>
                    <hr />
                    <div className="options">
                        <button onClick={this.showCommentBar} type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-comment" aria-hidden="true" />Comment</button>
                        <button onClick={this.addLike} type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true" />Like ({this.state.likes})</button>
                    </div>
                    {
                        (this.state.show) ?
                            <form className="navbar-form" onSubmit={this.addComment}>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={this.onChangeComment} placeholder="Reactie..."/>
                                </div>
                                <button type="submit" className="btn btn-default">Plaats reactie</button>
                            </form>
                            :
                            null
                    }
                    <div className="postComments">
                        {comments}
                    </div>
                </div>
                <hr className="postSeperator" />
            </div>
        )
    }
}

export default Post;