import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Col, Carousel} from 'react-bootstrap';

class IntroGallery extends Component {
    printList() {
        let res=this.props.restaurant[0];
        let rows = [];
        for (let i=0;i<res.categories.length;i++) {
            for (let j=0;j<res.categories[i].products.length;j++){
                if (res.categories[i].products[j].image != "http://myfod.ca/media/data/212141373116%20copy.jpg"){
                rows.push(
                    <div>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={res.categories[i].products[j].image} />
                            <Carousel.Caption>
                                <h4>{res.categories[i].products[j].title}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </div>
                )}
            }
        }
        return rows.map((dish)=>{
            return (
                <Carousel.Item>{dish}</Carousel.Item>
            )
        });
    }
    render() {
        return(<Carousel>{this.printList()}</Carousel>)

    }
}
function mapStateToProps(state) {
    return{
        restaurant: state.restaurant
    };
}

export default connect(mapStateToProps)(IntroGallery);

