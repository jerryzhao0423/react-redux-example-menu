import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class SideBarInstance extends Component{
    render (){
        return (

            <Nav bsStyle="pills" stacked className="side">
                <NavItem><Link to="/">Order Now</Link></NavItem>
                <NavItem><Link to="/intro">Introductions</Link></NavItem>
                <NavItem><Link to="/comments">Comments</Link></NavItem>
            </Nav>

        );
    }


}

export default SideBarInstance;