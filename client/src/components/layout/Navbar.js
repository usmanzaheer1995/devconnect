import React, { Component } from 'react'
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
                    <NavbarBrand href="landing.html">DevConnector</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink href="profiles.html">Developers</NavLink>
                            </NavItem>
                        </Nav>

                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="register.html">Signup</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="login.html">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                
                </div>
            </Navbar>
        )
    }
}

export default NavbarComponent;
