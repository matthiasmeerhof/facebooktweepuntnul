import React, { Component } from 'react'
import { FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';
import { addPost } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: ''
        };

        this.handleTitleChange      = this.handleTitleChange.bind(this);
        this.handleMessageChange    = this.handleMessageChange.bind(this);
        this.handleForm             = this.handleForm.bind(this);
    }

    handleForm(e) {
        e.preventDefault();
        let newPost = {
            title: this.state.title,
            message: this.state.message,
            author: 'Unkown Author',
            likes: 0,
            comments: []
        };
        this.props.addPost(newPost);
        this.setState({
            title: '',
            message: ''
        })
    }

    handleTitleChange(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    handleMessageChange(e) {
        e.preventDefault();
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div className="container bg-fb">
                <h2>Plaats een nieuw bericht:</h2>
                <form onSubmit={this.handleForm}>
                    <FormGroup controlId="formTitle">
                        <ControlLabel>Titel</ControlLabel>
                        <FormControl type="text" value={this.state.title} placeholder="Titel..." onChange={this.handleTitleChange} />
                    </FormGroup>
                    <FormGroup controlId="formControlsPost">
                        <ControlLabel>Bericht</ControlLabel>
                        <FormControl componentClass="textarea" value={this.state.message} placeholder="Bericht..." onChange={this.handleMessageChange} />
                    </FormGroup>
                    <Button type="submit">Plaats</Button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addPost : addPost}, dispatch)
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);