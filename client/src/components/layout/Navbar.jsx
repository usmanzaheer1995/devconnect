import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <Navbar color="dark" dark expand="sm" className="mb-4">
                <div className="container">
                    <NavbarBrand tag={Link} to="/">DevConnect</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink tag={Link} to="/profiles"></NavLink>
                            </NavItem>
                        </Nav>

                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink tag={Link} to="/register">Signup</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                
                </div>
            </Navbar>
        )
    }
}

export default NavbarComponent;
