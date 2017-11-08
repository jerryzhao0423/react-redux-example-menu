import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SideBarInstance extends Component{
    render (){
        return (
            <Nav bsStyle="pills" activeKey={1} stacked className="side">
                <NavItem eventKey={1}>Order Now</NavItem>
                <NavItem eventKey={2}>Introductions</NavItem>
                <NavItem eventKey={3}>Comments</NavItem>
            </Nav>
        );
    }


}

export default SideBarInstance;