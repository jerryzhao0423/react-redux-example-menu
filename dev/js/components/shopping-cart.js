import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Modal, Col, Row} from 'react-bootstrap'
import {onDecrease, onIncrease, onRemove} from "../actions/index"
import { bindActionCreators } from 'redux'

class ShoppingCart extends Component{
    constructor(props) {
        super(props);
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

    addShoppingItems() {
        const {selectedDishes}=this.props;
        let rows = [];
        for (let i=0;i<selectedDishes.length;i++) {
            rows.push(<div>
                <Row>
                    <Col lg={4}>
                        <Button bsSize="xsmall"
                                disabled={selectedDishes[i].quantity > 1 ? '' : 'disabled'}
                                onClick={()=>this.props.onDecrease(selectedDishes[i].id,selectedDishes[i].quantity)}>-</Button>
                        &nbsp;{selectedDishes[i].quantity}&nbsp;
                        <Button bsSize="xsmall" onClick={()=>this.props.onIncrease(selectedDishes[i].id,selectedDishes[i].quantity)}>+</Button>
                    </Col>
                    <Col lg={6}>
                        {selectedDishes[i].dish}
                        <Button bsSize="xsmall"
                                onClick={()=>this.props.onRemove(selectedDishes[i].id)}
                        >x</Button>
                    </Col>
                    <Col lg={2}>${selectedDishes[i].price}</Col>
                </Row>
                <hr/>
            </div>);

        }
        return rows.map((dish)=>{
            return (
                <div>{dish}</div>
            )
        })
    }

    calTotal (){
        const {selectedDishes}=this.props;
        let total=0;
        for (let i=0;i<selectedDishes.length;i++) {
             total=total + +selectedDishes[i].subtotal
        }
        return total.toFixed(2);
    }
    calTax(){
        let tax=this.calTotal()*0.13;
        return tax.toFixed(2);
    }
    calFTotal(){
        let total=+this.calTotal() + +this.calTax();
        return total.toFixed(2);
    }

    render(){
        const {selectedDishes}=this.props;
        const length=selectedDishes.length >0;
        if (!length){
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
            )
        }
        else {
            return (
                <div>
                        <div>
                            <h3 className="shoppingCartTitle">Shopping Cart</h3>
                            <hr/>
                        </div>

                        <div>{this.addShoppingItems()}</div>
                        <Row>
                            <div>
                                <hr/>
                                <Col lg={10}>Total:</Col>
                                <Col lg={2}>${this.calTotal()}</Col>
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
                                    {this.addShoppingItems()}
                                </div>
                                <div>Subtotal:${this.calTotal()}</div>
                                <div>Taxes:${this.calTax()}</div>
                                <div>Total:${this.calFTotal()}</div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.close.bind(this)}>Back to Shopping</Button>
                                <Button>Confirm and Go Ahead</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
            )}
    }
}
function mapStateToProps(state) {
    return {
        selectedDishes: state.selectedDishes
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({onIncrease, onDecrease, onRemove},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)