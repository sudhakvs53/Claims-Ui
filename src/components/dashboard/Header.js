import React from 'react';
import {
    Grid,
    Row,
    Col,
    Nav,
    Button,
    FormControl,
    FormGroup,
    Form
} from 'react-bootstrap';
import Breabcrumb from './breadcrumb';

const style = {
    position: 'fixed',
    width: '100%',
    'z-index': '101'
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div sm={24} >
                <Grid>
                    <Row>
                        <Col sm={24} className="navbar">
                            <Nav>
                                <div className="logo-div pull-left pull-left" >
                                    <div className="claim-logo" onClick={this.handleHomeClick} />
                                    CLAIM MANAGEMENT
            				</div>
                                <div className="center-div">
                                    {/* <div className="claim-searchbar pull-left input-group ml-20 mt-15 " > */}
                                    <Form inline>
                                        <span className="pull-left relative">
                                            <FormControl componentClass="select" bsClass="claim-search-list">
                                                <option label="Project" value="object:48" defaultValue>Project</option>
                                                <option label="Product Name" value="object:49">Product Name</option>
                                                <option label="Claim" value="object:50">Claim</option>
                                                <option label="Substantiation" value="object:51">Substantiation</option>
                                                <option label="Formula" value="object:52">Formula</option>
                                                <option label="Legacy Document" value="object:53">Legacy Document</option>
                                            </FormControl>
                                        </span>
                                        <FormControl className="claim-searchtext pull-left" type="text" placeholder="Enter Keywords" />
                                        <Button onClick={this.handleBasicSearch} className="btn btn-default claim-index-search-button pull-left" disabled="true ">
                                            <i className="glyphicon glyphicon-search" />
                                        </Button>
                                    </Form>
                                    {/* </div> */}
                                    {/* <span className="pull-right mt-15" >
                                    <span id="drop-signout1" className="border-radius-task dropdown pull-left">
                                        <span className="glyphicon glyphicon-th font15 dropdown-toggle" data-toggle="dropdown"> </span>
                                        <span className="dropdown-menu dropdown-menu-transition" style="width: 258px; left: -105px; top: 46px;">
                                            <span className="arrow-task" style="top: -14px; left: 105px;"></span>
                                            <span className="pull-left w-100">
                                                <span className="pull-left w-icon">
                                                    <span className="uui-ui"></span>
                                                    <span className="uui_text tc">Unified UI</span>
                                                </span>
                                                <span className="pull-left w-icon">
                                                    <a ng-href="" target="_blank">
                                                        <span className="concerto-ui"></span>
                                                        <span className="uui_text tc">Concerto</span>
                                                    </a>
                                                </span>
                                                <span className="pull-left w-icon">
                                                    <a ng-href="" target="_blank">
                                                        <span className="rm-ui"></span>
                                                        <span className="uui_text tc">RM</span>
                                                    </a>
                                                </span>
                                            </span>
                                            <span className="pull-left w-100">
                                                <span className="pull-left w-icon">
                                                    <a ng-href="" target="_blank">
                                                        <span className="capri-ui"></span>
                                                        <span className="uui_text tc">Capri</span>
                                                    </a>
                                                </span>
                                                <span className="pull-left w-icon">
                                                    <a ng-href="" target="_blank">
                                                        <span className="element-ui"></span>
                                                        <span className="uui_text tc">Element</span>
                                                    </a>
                                                </span>
                                                <span className="pull-left w-icon">
                                                    <span className="edrat-ui"></span>
                                                    <span className="uui_text tc">eDRAT</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span> */}
                                </div>
                                <div className="rm-welcomebar pull-right">
                                    <ul className="pull-left w-100" style1="LIST-STYLE: none;">
                                        <li className="pull-left">
                                            <a className="pull-left" style1="padding-right: 0; margin-top: -4px;">
                                                <span className="radius-user pull-left">
                                                    <span className="user-icon" />
                                                </span>
                                                <span id="userId" className="rm-utility-menu" style1="margin-left: 2px" />
                                            </a>
                                            <div id="drop-signout" className="dropdown pull-left mt-13">
                                                <span className="dropdown-toggle" data-toggle="dropdown" style1="text-transform: uppercase; cursor: pointer;">Ldap Admin1
             								<span className="caret" />
                                                </span>

                                                <ul className="dropdown-menu dropdown-menu-transition" data-dropdown-in="bounceInDown" data-dropdown-out="bounceOutDown" style1="cursor: pointer; margin-left: -17px; margin-top: 7px;">
                                                    <li><a style1="font-size: 13px; font-weight: normal; font-family: Arial; text-align: left;" href="/?method=logout&amp;returnUrl=Claims" ng-click="logout()" className="ng-binding">Sign Out</a></li>
                                                </ul>
                                            </div>
                                            <a className="pull-left" href="https:myapps.psso.its.jnj.com/ppolicy/legal.jsp" target="_blank" style1="padding-right: 10px; margin-left: 10px; color: white;">
                                                <span className="radius-user pull-left">
                                                    <i className="fa question" />
                                                </span>
                                                <span className="rm-utility-menu">Help</span>
                                            </a>
                                        </li>
                                        <li className="pull-right" />
                                    </ul>
                                </div>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Breabcrumb />
                    </Row>
                </Grid>
            </div>
        );
    }

}