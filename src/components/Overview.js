import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class Overview extends Component { 
    filterPosts(posts) {
        if(this.props.keyword !== "") {
            const regex = new RegExp(`^.*${this.props.keyword}.*`)
            let filterd = posts.filter((value) => {
                return value.title.match(regex) || value.author.match(regex);
            });
            return filterd;
        }
        return posts;    
    }

    render() {
        let filterd = this.filterPosts(this.props.posts);
        let posts = filterd.map((post, index) => (<Post post={post} key={index} index={index} />));
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
        keyword: state.search.keyword,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Overview);