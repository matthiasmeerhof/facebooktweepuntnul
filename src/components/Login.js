import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, Button, FormControl } from 'react-bootstrap';

class Login extends Component {
    handleChange(e) {
        localStorage.setItem('name', e.target.value);
    }

    handleOnClick() {
        let name = localStorage.getItem('name');
        if (name !== null) {
            if (name.length > 0) {
                this.props.login();
                this.props.route.history.push("/");
            }
        }
    }

    getValidationState() {
        const length = localStorage.getItem('name');
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
                            <FormControl type="name" placeholder="Name" onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup validationState={this.getValidationState()}>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.handleOnClick.bind(this)}>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;