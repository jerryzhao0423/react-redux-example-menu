import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/comment-action'
import {FormGroup, FormControl, Button, Col,Row} from 'react-bootstrap'
import '../../../scss/style.scss'


let AddComment = ({ dispatch }) => {
    let input, rate;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()||!rate.value.trim()) {
                    return
                }
                dispatch(addComment(input.value, rate.value));
                input.value = '';
                rate.value = ' ';
            }}>
                <FormGroup>
                    <Row>
                        <Col lg={2}><h4>Rating:</h4></Col>
                        <Col lg={10}>
                            <input className='rating'
                                   type="number" min="1" max="10" step="0.1"
                                   placeholder="0.0"
                                   ref={node => {rate = node}} />&nbsp;/10.0
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}> <h4>Comments:</h4> </Col>
                        <Col lg={10}>
                            <FormControl componentClass="textarea"
                                         bsClass='comment'
                                         placeholder="Write a comment..."
                                         inputRef={node => {input = node}} />
                            <br/>
                        </Col>
                    </Row>
                    <Col lg={10}> </Col>
                    <Col lg={2}><Button type="submit">Submit</Button></Col>
                </FormGroup>
            </form>
        </div>
    )
};

AddComment = connect()(AddComment);

export default AddComment
