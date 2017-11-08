import React,{Component} from 'react';
import {connect} from 'react-redux';
import NavBarInstance from '../nav-bar';
import SideBarInstance from '../side-bar';
import TitleZone from '../../containers/title-zone';
import CommentInputZone from '../../components/comment-page/comment-input';
import {Grid, Row, Col} from 'react-bootstrap';
import CommentList from "../../components/comment-page/comment-list";
import {addComment, deleteComment} from "../../actions/comment-action";
require('../../../scss/style.scss');

class AppComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        const {dispatch, commentList} = this.props;
        return (
            <div>
                <NavBarInstance/>
                <Grid>
                    <Row>
                        <TitleZone/>
                        <hr/>
                    </Row>
                    <Row>
                        <Col lg={2}>
                            <SideBarInstance/>
                        </Col>
                        <Col lg={10}>
                            <h3>Comment</h3>
                            <CommentInputZone
                                commentList={commentList}
                                onAdd={(text) => addComment(text)}
                            />
                            <CommentList
                                commentList={commentList}
                                onDel={index => dispatch(deleteComment(index))}
                            />
                        </Col>
                    </Row>
                </Grid>
                <a className="back" href="#">Back to top</a>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { commentList: state.commentList };
};



export default connect(mapStateToProps, {addComment})(AppComment);