import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
require('../../scss/style.scss');


class DishList extends Component {

    printList() {
        let res=this.props.restaurant[0];
        let rows = [];
        for (let i=0;i<res.categories.length;i++) {
            rows.push(<Col lg={12}> <h3 id="rice">{res.categories[i].name}</h3></Col>);
            for (let j=0;j<res.categories[i].products.length;j++){
                rows.push(
                    <Col lg={6}>
                        <div className="productCardCtn"
                             onClick={() =>this.props.selectDish(res.categories[i].products[j])}>
                            <Col lg={9}><div>{res.categories[i].products[j].title}</div></Col>
                            <Col lg={1}><div>${res.categories[i].products[j].price}</div></Col>
                        </div>
                    </Col>);}
        }
        return rows.map((dish)=>{
            return (
                <div>{dish}</div>
            )
        });
        }

    render() {
        return(<div>{this.printList()}</div>)

    }
}

export default DishList;