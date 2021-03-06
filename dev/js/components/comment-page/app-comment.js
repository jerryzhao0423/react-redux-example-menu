import React, {Component} from 'react'
import AddComment from '../../containers/comment-page/add-comment'
import CommentList from '../../containers/comment-page/comment-list'
import NavBarInstance from "../../components/nav-bar";
import SideBarInstance from "../../components/side-bar";
import TitleZone from '../../containers/title-zone';
import {Grid, Row, Col} from 'react-bootstrap';

class AppComment extends Component{
    render(){
        return(
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
                            <h3>Tell us how you feel...</h3>
                            <br/>
                            <AddComment/>
                            <hr/>
                            <h3>All Comments:</h3>
                            <br/>
                            <div className='wrapper'><CommentList /></div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default AppComment
