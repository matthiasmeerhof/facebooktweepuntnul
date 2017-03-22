import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, Button, FormControl } from 'react-bootstrap';
import { login } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : ''
        };
        this.handleChange   = this.handleChange.bind(this);
        this.handleOnClick  = this.handleOnClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            name : e.target.value
        })
    }

    handleOnClick() {
        let user = {
            name : this.state.name,
            loggedIn : true
        };
        this.props.login(user);
        this.setState({
            name : ''
        });
    }

    getValidationState() {
        const length = this.state.name.length;
        if (length > 0) return 'success';
    }

    render() {
        return (
            <div className="container">
                <Form horizontal>
                    <h1>Login to facebooktweepuntnul</h1>
                    <FormGroup controlId="formHorizontalEmail" validationState={this.getValidationState()}>
                        <Col componentClass={ControlLabel} sm={2}>Name</Col>
                        <Col sm={5}>
                            <FormControl type="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup validationState={this.getValidationState()}>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.handleOnClick}>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login : login}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login);