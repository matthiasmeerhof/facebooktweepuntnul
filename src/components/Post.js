import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addComment } from '../actions/index';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false,
            comment : ''
        };

        this.toggleCommentForm  = this.toggleCommentForm.bind(this);
        this.onChangeComment    = this.onChangeComment.bind(this);
        this.handleCommentForm  = this.handleCommentForm.bind(this);
    }

    toggleCommentForm(e) {
        e.preventDefault();
        this.setState({
            show : !this.state.show
        })
    }

    onChangeComment(e) {
        this.setState({
            comment : e.target.value
        })
    }

    handleCommentForm(e) {
        e.preventDefault();
        let newComment = {
            author: this.props.user.name,
            message: this.state.comment
        };
        this.props.addComment(newComment, this.props.index);
    }

    render() {
        let comments = this.props.post.comments.map((comment, index) => (<p key={index}> <i>{comment.author}</i> > "{comment.message}" </p>));
        return(
            <div>
                <div>
                    <div className="postHeader">
                        <Glyphicon className="user-profile-icon" glyph="glyphicon glyphicon-user"/>
                        <span className="title"><p><b>{ this.props.post.author }</b><i>plaatste een bericht</i><b>{this.props.post.title}</b>:</p></span>
                    </div>
                    <div className="postBody">
                        <div>
                            <span className="post">{this.props.post.message} </span>
                        </div>
                    </div>
                    <hr />
                    <div className="options">
                        <button type="button" className="btn btn-default btn-xs" onClick={this.toggleCommentForm}><span className="glyphicon glyphicon-comment" aria-hidden="true" />Comment</button>
                        <button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true" />Like ({this.props.post.likes})</button>
                    </div>
                    {
                        (this.state.show) ?
                            <form className="navbar-form" onSubmit={this.handleCommentForm}>
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

function mapStateToProps(state) {
    return {
        user : state.user,
        posts : state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addComment : addComment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);