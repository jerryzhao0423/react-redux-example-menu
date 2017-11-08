import React from 'react';
import NavBarInstance from '../components/nav-bar';
import SideBarInstance from '../components/side-bar';
import DishList from '../containers/dish-list';
import CategoryList from '../containers/category-list';
import TitleZone from '../containers/title-zone';
import ShoppingCart from '../containers/shopping-cart';
import {Grid, Row, Col} from 'react-bootstrap';
require('../../scss/style.scss');

const App = () => {
    return (
        <div>
            <NavBarInstance/>
            <Grid>
                <Row>
                    <TitleZone/>
                    <hr/>
                </Row>
                <Row>
                    <Col lg={2} md={3} xs={3}>
                        <SideBarInstance/>
                    </Col>
                    <Col lg={7} md={9} xs={9}>
                        <h3>Category</h3>
                        <br/>
                        <CategoryList/>
                        <hr/>
                        <h3>Menu</h3>
                        <DishList />
                    </Col>
                    <Col lg={3}>
                        <ShoppingCart />
                    </Col>
                </Row>
            </Grid>
            <a className="back" href="#">Back to top</a>
        </div>
    );
};

export default App;