import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Row,Col} from 'react-bootstrap'

class Comment extends Component{
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this);
        this.state = { timeString: '' }
    }
    componentWillMount () {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            50000
        )
    }

    componentWillUnmount () {
        clearInterval(this._timer)
    }

    _updateTimeString () {
        const duration = (+Date.now()-this.props.createdTime) / 1000
        console.log(this.props.createdTime)
        console.log(+Date.now())
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} minutes ago`
                : `${Math.round(Math.max(duration, 1))} seconds ago`
        })
    }
    handleDel() {
        let message = confirm("Sure to delete?");
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render(){
        const {text,rating,id}=this.props;
        return(
            <div>
                <Row>
                    <Col lg={2}>
                        <img width={64} height={64} alt="user's photo" />
                    </Col>
                    <Col lg={10}>
                        <h4>Rating:{rating}</h4>
                        <p>{text}</p>
                        <Row>
                            <Col lg={9}>{this.state.timeString}</Col>
                            <Col lg={3}>
                                <span onClick={this.handleDel} data-key={id}>Edit|</span>
                                <span onClick={this.handleDel} data-key={id}>Reply|</span>
                                <span onClick={this.handleDel.bind(this)} data-key={id}>Remove</span>
                            </Col>
                        </Row>
                    </Col>
                    <hr/>
                </Row>
            </div>
        )
    }
}


Comment.propTypes = {
    text: PropTypes.string.isRequired,
};

export default connect()(Comment)