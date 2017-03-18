import React, { Component } from 'react'
import { FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            post : '',
            send : false
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm(e) {
        e.preventDefault();
        this.props.postHandler(this.state.post, this.state.title);
        this.setState({
            title: '',
            post: '',
            send: true
        });
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
        let form = (
            <div className="container bg-fb">
                <h2>Plaats een nieuw bericht:</h2>
                <form onSubmit={this.handleForm}>
                    <FormGroup controlId="formTitle">
                        <ControlLabel>Titel</ControlLabel>
                        <FormControl type="text" value={this.state.title} placeholder="Titel..." onChange={this.handleTitleChange}/>
                    </FormGroup>
                    <FormGroup controlId="formControlsPost">
                        <ControlLabel>Bericht</ControlLabel>
                        <FormControl componentClass="textarea" value={this.state.post} placeholder="Bericht..." onChange={this.handlePostChange}/>
                    </FormGroup>
                    <Button type="submit">Plaats</Button>
                </form>
            </div>
        );
        let succesMessage = (
            <div className="container bg-fb">
                <span>Uw bericht is geplaatst!</span>
            </div>
        );

        if(this.state.send) {
            return succesMessage;
        } else {
            return form;
        }
    }
}

export default PostForm;