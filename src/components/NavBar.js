import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormControl, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Facebook 2.0</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullLeft>
                    <NavItem eventKey={1}><Link to="/add">Nieuw bericht</Link></NavItem>
                    <NavItem eventKey={2}><Link to="#">Profiel</Link></NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={3}><Link to="#">Logout</Link></NavItem>
                </Nav>
                <Navbar.Collapse>
                    <Navbar.Form>
                        <FormGroup>
                            <FormControl type="text" placeholder="Zoek .. [Werkt nog niet]"/>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;
