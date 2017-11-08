import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

class CategoryList extends Component{

    jumpToMenu() {
        window.location.hash = "rice";
    }

    createCategoryTags() {
        return this.props.restaurant[0].categories.map((restaurant)=>{
            return (
                <Button key={restaurant.id} onClick={this.jumpToMenu}>
                    {restaurant.name}
                </Button>
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