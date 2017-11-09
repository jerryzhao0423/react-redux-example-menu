import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
require('../../scss/style.scss');

class NavBarInstance extends Component{
    render (){
        return (
            <Navbar id="navbar" fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" id="fod">F.O.D</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Restaurant" id="fod">
                            <MenuItem>Restaurant A</MenuItem>
                            <MenuItem>Restaurant B</MenuItem>
                            <MenuItem>Restaurant C</MenuItem>
                            <MenuItem>Restaurant D</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem id="fod" href="/explore">Explore</NavItem>
                        <NavDropdown id="fod" title="Language">
                            <MenuItem>中文</MenuItem>
                            <MenuItem>English</MenuItem>
                        </NavDropdown>
                        <NavItem id="fod">Log in</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }


}

export default NavBarInstance;
