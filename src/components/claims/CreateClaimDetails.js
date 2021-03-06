import React, {Component} from "react";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import saveClaims from "../../actions/claimsAction";
import fetchClaims from "../../actions/fetchClaims";

import {
    Tabs,
    Tab,
    Button,
    Col,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Row,
    ListGroup,
    ListGroupItem,
    DropdownButton,
    ButtonToolbar,
    MenuItem,
    Label,
    Image,
    Table,
    Breadcrumb
} from "react-bootstrap";

class CreateClaimDetails extends React.Component {
    constructor(props, context) {
        super(props, context);

        //   console.log("prj Title: "+this.props.location.state.projTitle);
        // console.log("Need State: "+this.props.location.state.needState);
        // console.log("Prdct Form: "+this.props.location.state.prdctForm);
        // console.log("Claim Type: "+this.props.location.state.claimType);

        this.handleFormulaSelection = this
            .handleFormulaSelection
            .bind(this);
        this.handleSubstantiation = this
            .handleSubstantiation
            .bind(this);
        this.handleSubstantiationRowsChange = this
            .handleSubstantiationRowsChange
            .bind(this);

        this.state = {
            key: 1,
            selectedRegionKey: '',
            selectedFileUpload: '',
            formulaSelected: '1',
            btnLabel: 'Extract Optiva Data',
            isOptivLabFormula: true,
            substantiationVal: '',
            substantiationArray: [],
            substantiationRows: '10',
            displaySubstantiationTable: "false",
            hideSubstantiationTxtArea: "false",
            claimsTabClicked: "true",
            commentsTabClicked: "false",
            historyTabClicked: "false",
            //showAddClaimLink: "false",
            displayClaimDetails: "false",
            prjClaimDetails: [],
            titleValue: '',
            comments: '',
            needStateVal: this.props.claimHdrData[0].NeedState[this.props.location.state.needState],
            prdctFormVal: this.props.claimHdrData[1].PrdctForm[this.props.location.state.prdctForm],
            claimType: this.props.claimHdrData[2].ClaimType[this.props.location.state.claimType],
            projectId: this.props.location.state.projectId,

            claim: '',
            benefitArea: '',
            region: '',
            exception: ''

        };
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.clmData.hasSaved) {
            if (nextProps.clmData.claim_id != '' && !nextProps.fetchClmData.claimsFetching && !nextProps.fetchClmData.hasClaimsFetched) 
                this.props.fetchClaims(this.state.projectId);
            
            if (nextProps.fetchClmData.hasClaimsFetched) {
                this.setState({prjClaimDetails: nextProps.fetchClmData.data});
                this.setState({displayClaimDetails: "true"});
                this.setState({claimsTabClicked: "false"});
                nextProps.fetchClmData.hasClaimsFetched = false;
            }

        }

    }

    handleClaim = (e) => {
        this.setState({claim: e.target.value});
    }

    handleBenefitArea = (e) => {
        let benefitAreaVal = this.props.claimHdrData[3].BenefitArea[e.target.value];
        this.setState({benefitArea: benefitAreaVal});
    }

    handleException = (e) => {
        this.setState({exception: e.target.value});
    }

    handleSubstantiation = (e) => {
        let substantiationValue = e.target.value;
        //console.log(substantiationValue);
        this.setState({substantiationVal: substantiationValue});
    }

    handleFormulaSelection = (e) => {

        let formulaValue = e.target.value;
        if (formulaValue == '1' || formulaValue == '2') 
            this.setState({btnLabel: 'Extract Optiva Data'});
        else 
            this.setState({btnLabel: 'Add Data'});
        
        //console.log(formulaValue);
        this.setState({formulaSelected: formulaValue});

        this.setState({formulaSelected: formulaValue});
        //console.log('Formula Value Selected By User : '+this.state.formulaSelected);
    }

    handleRegionSelection = (e) => {

        let regionKey = e.target.value;
        //console.log('regionVal'+regionVal);

        this.setState({selectedRegionKey: regionKey});
        let regionVal = this.props.claimHdrData[4].Region[regionKey];

        this.setState({region: regionVal});

    }

    handleListItemSelection = (key) => {

        if (this.state.selectedRegionKey == key) 
            return 'active';
        
        return "";
    }

    handleFileUploadOptionSelection = (key) => {

        if (this.state.selectedFileUpload == key) 
            return 'active';
        
        return "";
    }

    handleSaveSubstantiationButton = () => {
        if (this.state.substantiationVal != '') 
            return "";
        else 
            return "disabled";
        }
    
    handleTitile = (e) => {
        this.setState({titleValue: e.target.value});
    }

    fileUploadButtonStatus = () => {
        if (this.state.titleValue != '') 
            return "";
        else 
            return "disabled";
        }
    
    handleSubstantiationRowsChange = (e) => {

        //console.log("Rows:"+e.target.value);
        this.setState({substantiationRows: e.target.value});
    }

    clearInput() {
        document
            .getElementById('input1')
            .value = "";
    }

    handleSubstantiationClick = (e) => {

        if (this.handleSaveSubstantiationButton() === "disabled") 
            return "false";
        
        this.setState({hideSubstantiationTxtArea: "true"});
        this.setState({displaySubstantiationTable: "true"});
        this.setState({
            substantiationArray: this
                .state
                .substantiationArray
                .concat(this.state.substantiationVal)
        });
    }

    handleAddSubstantiation = (e) => {
        this.setState({hideSubstantiationTxtArea: "false"});
        this.setState({displaySubstantiationTable: "false"});
        this.setState({substantiationVal: ''});
    }

    handleFileUpload = (e) => {

        let fileUploadKey = e.target.value;

        this.setState({selectedFileUpload: fileUploadKey});
    }

    commentsTabHandler = (e) => {
        this.setState({commentsTabClicked: "true"});
        this.setState({claimsTabClicked: "false"});
        this.setState({displayClaimDetails: "false"});
        //this.setState({showAddClaimLink: "false"});
        this.setState({historyTabClicked: "false"});
    }

    claimsTabHandler = (e) => {
        this.setState({claimsTabClicked: "false"});
        //this.setState({showAddClaimLink: "true"});
        this.setState({commentsTabClicked: "false"});
        this.setState({historyTabClicked: "false"});
        this.setState({displayClaimDetails: "true"});
    }

    historyTabHandler = (e) => {

        this.setState({claimsTabClicked: "false"});
        //this.setState({showAddClaimLink: "false"});
        this.setState({commentsTabClicked: "false"});
        this.setState({historyTabClicked: "true"});
        this.setState({displayClaimDetails: "false"});

    }

    handleAddNewClaim = (e) => {
        this.setState({claimsTabClicked: "true"});
        //this.setState({showAddClaimLink: "false"});
        this.setState({displayClaimDetails: "false"});
        this.setState({displaySubstantiationTable: "false"});
        this.setState({hideSubstantiationTxtArea: "false"});
        this.setState({
            claim: '',
            benefitArea: '',
            region: '',
            exception: '',
            substantiationVal: '',
            substantiationArray: []
        });
    }

    handleComments = (e) => {
        let comment = e.target.value;
        this.setState({comments: comment});
    }

    handleCreateClaim = (e) => {

        let claimObject = {

            project_title: this.props.location.state.projTitle,
            need_state: this.state.needStateVal,
            product_form: this.state.prdctFormVal,
            claim_type: this.state.claimType,
            claim_name: this.state.claim,
            benefit_area: this.state.benefitArea,
            region: this.state.region,
            exception: this.state.exception,
            substantiation: this.state.substantiationArray,
            formula: null,
            created_by: "ldapadmin1",
            created_on: "2018-02-27T11:22:00.738Z",
            modified_by: "ldapadmin1",
            modified_on: "2018-02-27T11:22:00.738Z",
            project_id: this.state.projectId,
            project_status: "In Progress"
        };

        const histObject = {
            claim_id: '',
            claim_name: this.state.claim,
            description: "des1",
            modified_on: "2018-02-28"
        };

        const commentObject = {
            claim_id: '',
            comment_id: "1234",
            claim_name: this.state.claim,
            project_title: this.props.location.state.projTitle,
            commented_by: "ldapadmin1",
            commented_on: "2018-02-28T11:22:00.738Z",
            comment_text: this.state.comments
        };

        const substObject = {
            substantiation_id: '',
            claim_id: '',
            reason: this.state.substantiationArray,
            supp_docs: ''
        };

        this
            .props
            .saveClaims(claimObject, histObject, substObject);

        // console.log("claimObject: "+ claimObject); console.log("Claim:
        // "+this.state.claim); console.log("Benefit Area: "+this.state.benefitArea);
        // console.log("Region Selected is: "+this.state.region);
        // console.log("Exception: "+this.state.exception);
        // console.log("substantiationVal: "+this.state.substantiationVal);
    }

    render() {
        return (
            <div className="class1">
                <div>
                    <span className="pull-left clmslogo"/>
                    <h4 className="titleClass1">CLAIM MANAGEMENT</h4>
                </div>
                <div className="class2">
                    <Breadcrumb>
                        <Breadcrumb.Item href="http://localhost:8081/dashboard">
                            <Image className="homeIcon"/>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Create Claims</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <div className="pull-right statusClass">
                        <span className="spanclass1">
                            <span className="statusImg"/>
                            <span className="bottomText">Status</span>
                        </span>
                        <span className="spanclass">
                            <span className="claimImg" onClick={this.claimsTabHandler}/>
                            <span className="claimBottomText">Claim</span>
                        </span>
                        <span className="spanclass">
                            <span className="historyImg" onClick={this.historyTabHandler}/>
                            <span className="bottomText">History</span>
                        </span>
                        <span className="spanclass">
                            <span className="commentsImg" onClick={this.commentsTabHandler}/>
                            <span className="bottomText">Comments</span>
                        </span>
                    </div>
                    <div sm={6} className="clmDtlsClass">
                        <span>
                            {this.props.location.state.projTitle}
                        </span>
                        <span>
                            |
                        </span>
                        {this.props.location.state.claimType == "1" && <div>
                            <p>
                                Product Form:
                                <span>
                                    {this.state.prdctFormVal}
                                </span>
                            </p>
                        </div>
}
                        <p>
                            Need State:
                            <span>
                                {this.state.needStateVal}
                            </span>
                        </p>
                        <p>
                            Claim Type:
                            <span>
                                {this.state.claimType}
                            </span>
                        </p>
                        <p>
                            Created By:
                        </p>
                    </div>

                </div>
                <div>
                    <div className="pull-right tabControls">
                        <Button type="submit" onClick={this.handleCreateClaim} bsStyle="primary">Save</Button>
                        <Button className="btnClass">Cancel</Button>
                    </div>
                    <div>
                        {/* {this.state.showAddClaimLink == "true" && <div>
                            <hr/>
                            <Form horizontal>
                                <span>+</span>
                                <span className="addClaimsLink" onClick={this.handleAddNewClaim}>
                                    Add New Claim</span>
                            </Form>
                        </div>
} */}
                        {this.state.displayClaimDetails == "true" && <div>
                            <hr/>
                            <Form horizontal>
                                <span className="newClaimLink">+</span>
                                <span className="addClaimsLink" onClick={this.handleAddNewClaim}>
                                    Add New Claim</span>
                                <span/> {this
                                    .state
                                    .prjClaimDetails
                                    .map(claims => (
                                        <div className="clmInfo">
                                            <table className="clmTable">
                                                <tbody>
                                                    <tr>
                                                        <th className="clmId">Claim Id</th>
                                                        <th className="clmName">Claim</th>
                                                        <th className="benefitArea">Benefit Area</th>
                                                        <th className="regions">Regions(s)</th>
                                                        <th className="clmAction">Action</th>
                                                    </tr>
                                                    <tr key={claims.claim_id}>
                                                        <td className="tdclass1">{claims.claim_id}</td>
                                                        <td className="tdclass1">{claims.claim_name}</td>
                                                        <td className="tdclass1">{claims.benefit_area}</td>
                                                        <td className="tdclass1">{claims.region}</td>
                                                        <td className="tdclass1"/>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {claims.substantiation != '' && <table className="subTable2">
                                                <tbody>
                                                    <tr>
                                                        <th className="subheader">Substantiation</th>
                                                        <th className="fname">File Name</th>
                                                        <th className="ftitle">File Title</th>
                                                        <th className="fsource">Source</th>
                                                        <th className="action">Size</th>
                                                    </tr>
                                                    {claims
                                                        .substantiation
                                                        .map(substantiations => (

                                                            <tr key={substantiations}>
                                                                <td className="tdclass">{substantiations}</td>
                                                                <td className="tdclass"/>
                                                                <td className="tdclass"/>
                                                                <td className="tdclass"/>
                                                                <td className="tdclass"/>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
}
                                        </div>
                                    ))}
                            </Form>
                        </div>
}
                        {this.state.claimsTabClicked == "true" && <Tabs id="controlled-tab-example">
                            <Tab eventKey={1} title="   Claim   ">
                                <p className="clmTabTitle">Claim Details</p>

                                <Col sm={12} className="clmFormClass">
                                    <Form horizontal>
                                        <FormGroup controlId="formHorizontalNeedState">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Claim:
                                            </Col>
                                            <Col sm={8}>
                                                <FormControl
                                                    componentClass="textarea"
                                                    onChange={this.handleClaim}
                                                    value={this.state.claim}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalNeedState">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Benefit Area:
                                            </Col>
                                            <Col sm={8}>
                                                <FormControl
                                                    componentClass="select"
                                                    placeholder="Benefit Area:"
                                                    onChange={this.handleBenefitArea}>
                                                    <option value="0">Select Benefit Area</option>
                                                    <option value="1">
                                                        Cleansing
                                                    </option>
                                                    <option value="2">
                                                        Composition/Product Design
                                                    </option>
                                                    <option value="3">
                                                        Efficacy
                                                    </option>
                                                </FormControl>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Region:
                                            </Col>
                                            <Col sm={8}>
                                                <ListGroup>
                                                    <ListGroupItem
                                                        value="1"
                                                        onClick={this.handleRegionSelection}
                                                        className={this.handleListItemSelection(1)}>AP</ListGroupItem>
                                                    <ListGroupItem
                                                        value="2"
                                                        onClick={this.handleRegionSelection}
                                                        className={this.handleListItemSelection(2)}>EMEA</ListGroupItem>
                                                    <ListGroupItem
                                                        value="3"
                                                        onClick={this.handleRegionSelection}
                                                        className={this.handleListItemSelection(3)}>LATAM</ListGroupItem>
                                                    <ListGroupItem
                                                        value="4"
                                                        onClick={this.handleRegionSelection}
                                                        className={this.handleListItemSelection(4)}>NA</ListGroupItem>
                                                </ListGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalException">
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Exception:
                                            </Col>
                                            <Col sm={8}>
                                                <FormControl
                                                    type="exception"
                                                    onChange={this.handleException}
                                                    value={this.state.exception}/>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Tab>
                            {this.props.location.state.claimType == "1" && <Tab
                                eventKey={2}
                                title="   Formula # / Product Spec #    "
                                className={this.props.location.state.claimType == "1"
                                ? 'disabled'
                                : ''}>
                                <p>Extract Formula # / Product Spec #</p>
                                <hr/>
                                <select onChange={this.handleFormulaSelection}>
                                    <option value="1">Optiva Formula #</option>
                                    <option value="2">Lab Notebook #</option>
                                    <option value="3">Formula Number</option>
                                    <option value="4">Product Specification</option>
                                </select>
                                <input id="input1"/>
                                <Button className="btnClass" type="submit" bsStyle="primary">{this.state.btnLabel}</Button>
                                <Button className="btnClass" type="submit" onClick={this.clearInput}>Clear</Button>
                                <div>
                                    <Col sm={8}>
                                        <Form horizontal>
                                            <FormGroup controlId="formHorizontalFormulaTitle">
                                                <Col componentClass={ControlLabel} sm={2}>
                                                    Formula # / Product Spec #:
                                                </Col>
                                                <Col sm={8}>
                                                    <FormControl type="formula" readOnly/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalLabNotebookTitle">
                                                <Col componentClass={ControlLabel} sm={2}>
                                                    Lab Notebook #:
                                                </Col>
                                                <Col sm={8}>
                                                    <FormControl
                                                        type="formula"
                                                        disabled
                                                        ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'
                                                        ? true
                                                        : false}/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalRegionTitle">
                                                <Col componentClass={ControlLabel} sm={2}>
                                                    Region
                                                </Col>
                                                <Col sm={8}>
                                                    <FormControl
                                                        type="formula"
                                                        disabled
                                                        ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'
                                                        ? true
                                                        : false}/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalPrdctNameTitle">
                                                <Col componentClass={ControlLabel} sm={2}>
                                                    Product Name:
                                                </Col>
                                                <Col sm={8}>
                                                    <FormControl
                                                        type="formula"
                                                        disabled
                                                        ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'
                                                        ? true
                                                        : false}/>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalPrjNameTitle">
                                                <Col componentClass={ControlLabel} sm={2}>
                                                    Project Name:
                                                </Col>
                                                <Col sm={8}>
                                                    <FormControl
                                                        type="formula"
                                                        disabled
                                                        ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'
                                                        ? true
                                                        : false}/>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <ButtonToolbar>
                                            <Col smOffset={2} sm={8}>
                                                <Button type="submit" bsStyle="primary">Save Formula</Button>
                                                <Button type="submit" className="btnClass" bsStyle="primary">Refer Formulae</Button>
                                            </Col>
                                        </ButtonToolbar>
                                    </Col>
                                </div>
                            </Tab>
}
                            <Tab eventKey={3} title="   Substantiation   ">
                                <p className="subTitle">Add Substantiation (s)</p>
                                {this.state.hideSubstantiationTxtArea != "true" && <div>
                                    <Button
                                        className={this.handleSaveSubstantiationButton()}
                                        onClick={this.handleSubstantiationClick}
                                        type="submit"
                                        className="subButton"
                                        bsStyle="primary">Save Substantiation</Button>
                                    <Button className="subButton" type="submit">Cancel</Button>
                                    <Form horizontal className="subFormClass">
                                        <FormGroup controlId="formHorizontalSubstantiation">
                                            <Col sm={2}>
                                                Substantiation:
                                            </Col>
                                            <Col sm={8} className="txtAreaClass">
                                                <FormControl
                                                    componentClass="textarea"
                                                    rows={this.state.substantiationRows}
                                                    onChange={this.handleSubstantiation}/>
                                            </Col>

                                            <Col sm={2}>
                                                <span>Rows:</span>
                                                <FormControl
                                                    className="rowSelect"
                                                    componentClass="select"
                                                    placeholder="Rows:"
                                                    onChange={this.handleSubstantiationRowsChange}>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                    <option value="20">20</option>
                                                    <option value="25">25</option>
                                                    <option value="30">30</option>
                                                    <option value="35">35</option>
                                                    <option value="40">40</option>
                                                </FormControl>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup controlId="formHorizontalFileUploadRows" className="fileUpload">
                                            <Col >
                                                <ListGroup>
                                                    <ListGroupItem
                                                        value="1"
                                                        onClick={this.handleFileUpload}
                                                        className={this.handleFileUploadOptionSelection(1)}>Upload Support</ListGroupItem>
                                                    <ListGroupItem
                                                        value="2"
                                                        onClick={this.handleFileUpload}
                                                        className={this.handleFileUploadOptionSelection(2)}>Link Support</ListGroupItem>
                                                    <ListGroupItem
                                                        value="3"
                                                        onClick={this.handleFileUpload}
                                                        className={this.handleFileUploadOptionSelection(3)}>Refer Support</ListGroupItem>
                                                    <ListGroupItem
                                                        value="4"
                                                        onClick={this.handleFileUpload}
                                                        className={this.handleFileUploadOptionSelection(4)}>Legacy Support</ListGroupItem>
                                                </ListGroup>
                                            </Col>
                                        </FormGroup>
                                        {this.state.selectedFileUpload == "1" && <div className="fileUpload1">
                                            <p>Upload Supporting Document</p>
                                            <hr/>

                                            <Col componentClass={ControlLabel} sm={2}>
                                                File:
                                            </Col>
                                            <Col sm={3}>
                                                <FormControl componentClass="input"/>
                                            </Col>
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Title:
                                            </Col>
                                            <Col sm={3}>
                                                <FormControl componentClass="input" onChange={this.handleTitile}/>
                                            </Col>
                                            <Button
                                                className={this.fileUploadButtonStatus()}
                                                type="submit"
                                                bsStyle="primary">Upload Support</Button>
                                            <Button className="btnClass">Cancel</Button>
                                        </div>
}
                                        {this.state.selectedFileUpload == "2" && <div className="fileUpload2">
                                            <p>Link Document to CONNECT</p>
                                            <hr/>

                                            <Col componentClass={ControlLabel} sm={2}>
                                                CONNECT Id:
                                            </Col>
                                            <Col sm={3}>
                                                <FormControl componentClass="input"/>
                                            </Col>
                                            <Col componentClass={ControlLabel} sm={2}>
                                                Title:
                                            </Col>
                                            <Col sm={3}>
                                                <FormControl componentClass="input"/>
                                            </Col>
                                        </div>
}
                                    </Form>
                                </div>
}
                                {this.state.displaySubstantiationTable == "true" && <div>
                                    <Button
                                        className="subButton"
                                        bsStyle="primary"
                                        onClick={this.handleAddSubstantiation}>
                                        Add Substantiation
                                    </Button>
                                    <div className="subTable">
                                        <table className="subTable1">
                                            <tbody>
                                                <tr>
                                                    <th className="subheader">Substantiation</th>
                                                    <th className="fname">File Name</th>
                                                    <th className="ftitle">File Title</th>
                                                    <th className="fsource">Source</th>
                                                    <th className="action">Action</th>
                                                </tr>

                                                {this
                                                    .state
                                                    .substantiationArray
                                                    .map(substantiations => (
                                                        <tr key={substantiations}>
                                                            <td className="tdclass">{substantiations}</td>
                                                            <td className="tdclass"/>
                                                            <td className="tdclass"/>
                                                            <td className="tdclass"/>
                                                            <td className="tdclass"/>
                                                        </tr>
                                                    ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
}
                            </Tab>
                        </Tabs>
}
                        {this.state.historyTabClicked == "true" && <div>
                            <hr/>
                            <Form horizontal>
                                <Col sm={8}>
                                    <FormControl componentClass="select">
                                        <option value="0">All</option>
                                    </FormControl>
                                </Col>
                                <Table striped bordered condensed>
                                    <thead>
                                        <tr>
                                            <th>Claim</th>
                                            <th>Claim Id</th>
                                            <th>Description</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                </Table>
                            </Form>
                        </div>
}
                        {this.state.commentsTabClicked == "true" && <div>
                            <hr/>
                            <p>Add Comment</p>
                            <Form horizontal>
                                <Col sm={8}>
                                    <FormControl componentClass="select">
                                        <option value="0">All</option>
                                    </FormControl>
                                </Col>
                                <Col sm={8}>
                                    <FormGroup controlId="formHorizontalAddComments">
                                        <FormControl
                                            componentClass="textarea"
                                            value={this.state.comments}
                                            onChange={this.handleComments}
                                            className="commentsTab"
                                            rows="5"/>
                                    </FormGroup>
                                </Col>
                            </Form>
                        </div>
}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {claimHdrData: state.navToDetail, clmData: state.saveClaims, fetchClmData: state.fetchClaims};
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        saveClaims,
        fetchClaims
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClaimDetails);
