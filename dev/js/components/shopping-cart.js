import React, {Component} from 'react';
import {Button, Modal, Col, Row} from 'react-bootstrap';

class ShoppingCart extends Component {
//checkout modal
    constructor() {
        super();
        this.state = {
            showModal: false,
            num: 0,
            totalPrice: 0,
        };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
//set quantity
    onIncrease(){
        let quan = this.state.num +1;
        let totalNum = quan *this.props.addDish.price;
        this.setState({num: quan,
            totalPrice: totalNum.toFixed(2)});
    }
    onDecrease(){
        let quan = this.state.num -1;
        let totalNum = quan *this.props.addDish.price;
        this.setState({num: quan,
            totalPrice: totalNum.toFixed(2)});
    }

//add item
    addShoppingItems() {
        let rows = [];
        rows.push(this.props.addDish.title);
        console.log(rows);
        return rows.map((dish)=>{
            return (
                <div>{dish}</div>
            )
        });
/*        return(
            <div>
                {this.props.addDish.title}
            </div>
        );*/
    }

    render() {
        if (!this.props.addDish){
            return(
                <div>
                    <div>
                        <h3 className="shoppingCartTitle">Shopping Cart</h3>
                    </div>
                    <hr/>
                    <div>
                        Empty
                    </div>
                    <hr/>
                    <div>
                        <Button bsStyle="info" bsSize="small" disabled>
                            Check Out
                        </Button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div>
                    <h4>Shopping Cart</h4>
                </div>
                <hr/>
                <Row>
                    <div>
                        <Col lg={4}>
                            <div>
                                <Button bsSize="xsmall" onClick={this.onDecrease.bind(this)}
                                        disabled={this.state.num > 0 ? '' : 'disabled'}
                                >-</Button>
                                <span>&nbsp;{this.state.num}&nbsp;</span>
                                <Button bsSize="xsmall" onClick={this.onIncrease.bind(this)}>+</Button>
                            </div>
                        </Col>
                        <Col lg={6}>{this.addShoppingItems()}</Col>
                        <Col lg={2}><span>${this.props.addDish.price}</span></Col>
                    </div>
                </Row>
                <Row>
                    <div>
                        <hr/>
                        <Col lg={10}>Total:</Col>
                        <Col lg={2}>${this.state.totalPrice}</Col>
                    </div>
                </Row>


                <Row>
                    <div>
                        <hr/>
                        <Button bsStyle="info" bsSize="small" onClick={this.open.bind(this)}>
                            Check Out
                        </Button>
                    </div>
                </Row>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Page</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Back to Shopping</Button>
                        <Button>Confirm and Go Ahead</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );

    }
}

export default ShoppingCart;