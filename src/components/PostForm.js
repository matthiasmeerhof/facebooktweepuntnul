import React, { Component } from 'react';

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            title : '',
            post : ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm(e) {
        e.preventDefault();
    }

    handleTitleChange(e) {
        e.preventDefault();
        this.setState({
            title : e.target.value,
            post : this.state.post
        })
    }

    handlePostChange(e) {
        e.preventDefault();
        this.setState({
            title : this.state.title,
            post : e.target.value
        })
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleForm}>
                    <label>
                        Titel:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
                    </label>
                    <label>
                        Bericht:
                        <textarea value={this.state.post} onChange={this.handlePostChange} name="post" />
                    </label>
                    <input type="submit" value="Verzenden" />
                </form>
            </div>
        );
    }
}

export default PostForm;