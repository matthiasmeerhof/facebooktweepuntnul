import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, Button, FormControl } from 'react-bootstrap';

class Login extends Component { 
    handleOnSubmit(e) {
        localStorage.setItem('loggedId', true);    
    }
    
    render() {
        return (
            <div className="container">
                <Form horizontal>
                    <h1>Login to facebooktweepuntnul</h1>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>Email</Col>
                        <Col sm={5}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onSubmit={this.handleOnSubmit}>Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;