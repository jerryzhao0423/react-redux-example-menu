import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

class CommentInputZone extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value :''
        };
    }
    handleClick(e){
        e.preventDefault();
        const inputNode = findDOMNode(this._inputNew);
        const text = this._inputNew.value.trim();
        const {onAdd}=this.props;
        console.log(text);
        if (text !== '') {
            onAdd(text);
        }
        inputNode.value = '';
    }

    render() {
        return(
            <form onSubmit={e=>this.handleClick(e)}>
                <FormGroup>
                    <FormControl componentClass="textarea"
                                 placeholder="textarea"
                                 inputRef={inputNew => {this._inputNew = inputNew}}/>
                </FormGroup>
                <Button type="submit" onClick={e=>this.handleClick(e)}>
                    Submit
                </Button>
            </form>
        )}
}

export default CommentInputZone