import React, {Component} from 'react';
import {Button, ButtonToolbar,Col} from 'react-bootstrap';

class CategoryList extends Component{


    createCategoryTags() {
        return this.props.restaurant[0].categories.map((restaurant)=>{
            return (
                <Col lg={12}>
                <Button key={restaurant.id}
                        id="btn-category"
                        onClick={()=>document.getElementById(restaurant.name).scrollIntoView()}
                >
                    {restaurant.name}
                </Button>
                </Col>
            )
        });
    }

    render(){
        return(
            <ButtonToolbar>
                {this.createCategoryTags()}
            </ButtonToolbar>
        );
    }
}

export default CategoryList;