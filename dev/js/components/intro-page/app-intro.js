import React, {Component} from 'react'
import NavBarInstance from "../../components/nav-bar";
import SideBarInstance from "../../components/side-bar";
import TitleZone from '../../containers/title-zone';
import {Grid, Row, Col} from 'react-bootstrap';
import IntroGallery from "./intro-gallery";

class AppIntro extends Component{
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
                            <IntroGallery/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default AppIntro