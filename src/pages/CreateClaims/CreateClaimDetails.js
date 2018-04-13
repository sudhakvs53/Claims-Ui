import React, {Component} from "react";
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import saveClaims from "../../actions/createClaims";

import {
    Tabs,
    Tab, 
    Button, Col,
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
    title,
    MenuItem,
    Label

} from "react-bootstrap";

class CreateClaimDetails extends React.Component {
    constructor(props, context) {
      super(props, context);

    //   console.log("prj Title: "+this.props.location.state.projTitle);
    //   console.log("Need State: "+this.props.location.state.needState);
    //   console.log("Prdct Form: "+this.props.location.state.prdctForm);
    //   console.log("Claim Type: "+this.props.location.state.claimType);

      

      this.handleFormulaSelection = this.handleFormulaSelection.bind(this);
      this.handleSubstantiation = this.handleSubstantiation.bind(this);
      this.handleSubstantiationRowsChange = this.handleSubstantiationRowsChange.bind(this);
      
      this.state = {
        key: 1,
        selectedRegionKey: '',
        formulaSelected: '1',
        btnLabel: 'Extract Optiva Data',
        isOptivLabFormula: true,
        substantiationVal: '',
        substantiationRows: '10',
        displaySubstantiationTable: "false",
        hideSubstantiationTxtArea: "false",
        needStateVal: this.props.claimHdrData[0].NeedState[this.props.location.state.needState],
        prdctFormVal: this.props.claimHdrData[1].PrdctForm[this.props.location.state.prdctForm],
        claimType: this.props.claimHdrData[2].ClaimType[this.props.location.state.claimType],

        claim: '',
        benefitArea: '',
        region: '',
        exception: ''

      }
    }

    handleClaim = (e) => {
        this.setState({claim: e.target.value});
    }

    handleBenefitArea = (e) => {
        var benefitAreaVal = this.props.claimHdrData[3].BenefitArea[e.target.value];
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
        if(formulaValue == '1' || formulaValue == '2')
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
       
        if(this.state.selectedRegionKey == key)
          return 'active'

        return "";

          
    }

    handleSubstantiationRowsChange = (e) => {
       
         //console.log("Rows:"+e.target.value);
         this.setState({substantiationRows: e.target.value});
    }

    clearInput() {
        document.getElementById('input1').value = "";
    }

    handleSubstantiationClick = (e) => {

       this.setState({hideSubstantiationTxtArea: "true"});
       this.setState({displaySubstantiationTable: "true"});
     
    }

    handleAddSubstantiation = (e) => {
       this.setState({hideSubstantiationTxtArea: "false"});
       this.setState({displaySubstantiationTable: "false"});
    }

    handleCreateClaim = (e) => {

        var claimObject = {

          project_title      : this.props.location.state.projTitle,
          need_state         : this.state.needStateVal,
          product_form       : this.state.prdctFormVal,
          claim_type         : this.state.claimType,
          claim              : this.state.claim,
          benefit_area       : this.state.benefitArea,
          region             : this.state.region,
          exception          : this.state.exception,
          substantiation     : this.state.substantiationVal,
          project_id         : null,
          formula            : null,
          created_by         : "ldapadmin1",
          created_on         : "2018-02-27T11:22:00.738Z",
          modified_by        : "ldapadmin1",
          modified_on        : "2018-02-27T11:22:00.738Z",
          project_id         : "12345"
          

        }

        this.props.saveClaims(claimObject);

        console.log("claimObject: "+ claimObject);
        // console.log("Claim: "+this.state.claim);
        // console.log("Benefit Area: "+this.state.benefitArea);
        // console.log("Region Selected is: "+this.state.region);
        // console.log("Exception: "+this.state.exception);
        // console.log("substantiationVal: "+this.state.substantiationVal);
    }

    render() {
      return (
          <div>
           <div>
            <div sm={6}>    
             <span> {this.props.location.state.projTitle} </span>
             <span> | </span>
             { this.props.location.state.claimType == "1" && 
               <div>
                 <p> Product Form: 
                 <span> {this.state.prdctFormVal} </span> </p>
               </div>
             }
             <p> Need State: 
             <span> {this.state.needStateVal} </span> </p>
             <p> Claim Type: 
             <span> {this.state.claimType} </span> </p>
             <p> Created By: </p>
            </div>
            <div className="pull-right">
                <Button type="submit" onClick={this.handleCreateClaim} bsStyle="primary">Save</Button>
                <Button className="btnClass">Cancel</Button>
           </div>
           </div>
        <Tabs
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="   Claim   ">
            <p>Claim Details</p>
            <hr />
            <Col sm={8}>    
                <Form horizontal>
                <FormGroup controlId="formHorizontalNeedState">
                     <Col componentClass = {ControlLabel} sm = {2}>
                       Claim:
                     </Col>
                  <FormControl componentClass="textarea" onChange={this.handleClaim} value={this.state.claim}/>
                </FormGroup>
                <FormGroup controlId="formHorizontalNeedState">
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Benefit Area:
                     </Col> 
                     <Col sm = {8}>
                       <FormControl componentClass = "select" 
                                    placeholder = "Benefit Area:"
                                    onChange={this.handleBenefitArea}>
                         <option value = "0" >Select Benefit Area</option>   
                         <option value = "1" > Cleansing </option> 
                         <option value = "2" > Composition/Product Design </option> 
                         <option value = "3" > Efficacy </option> 
                       </FormControl>  
                     </Col>    
                </FormGroup>
                <FormGroup>
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Region:
                     </Col>
                     <Col sm = {8}>
                      <ListGroup>
                        <ListGroupItem value="1" onClick={this.handleRegionSelection} className={this.handleListItemSelection(1)}>AP</ListGroupItem>
                        <ListGroupItem value="2" onClick={this.handleRegionSelection} className={this.handleListItemSelection(2)}>EMEA</ListGroupItem>
                        <ListGroupItem value="3" onClick={this.handleRegionSelection} className={this.handleListItemSelection(3)}>LATAM</ListGroupItem>
                        <ListGroupItem value="4" onClick={this.handleRegionSelection} className={this.handleListItemSelection(4)}>NA</ListGroupItem>
                      </ListGroup>  
                     </Col>
                </FormGroup>  
                <FormGroup controlId="formHorizontalException">
                     <Col componentClass={ControlLabel} sm={2}>
                            Exception:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="exception" onChange={this.handleException} value={this.state.exception} />
                     </Col>
                  </FormGroup>
                </Form>
                  </Col>
          </Tab>
          {this.props.location.state.claimType == "1"  && 
          <Tab eventKey={2} title="   Formula # / Product Spec #    "
               className={this.props.location.state.claimType == "1"?'disabled': ''}>
            <p>Extract Formula # / Product Spec #</p>
            <hr />
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
                     <Col componentClass={ControlLabel} sm={2} >
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
                       <FormControl type="formula" disabled ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'? true:false } />
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalRegionTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                             Region
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" disabled ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'? true:false }/>
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPrdctNameTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                            Product Name:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" disabled ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'? true:false }/>
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPrjNameTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                            Project Name:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" disabled ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'? true:false }/>
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
            <p>Add Substantiation (s)</p>
            <hr />
            {this.state.hideSubstantiationTxtArea != "true" && 
            <div>
            <Button className={this.state.substantiationVal == ''?'disabled':''} onClick={this.handleSubstantiationClick} type="submit" bsStyle="primary">Save Substantiation</Button>
            <Button className="btnClass" type="submit">Cancel</Button>
            <Form horizontal>
                <FormGroup controlId="formHorizontalSubstantiation">
                     <Col sm = {2}>
                       Substantiation:
                     </Col>
                  <FormControl componentClass="textarea" rows={this.state.substantiationRows} onChange={this.handleSubstantiation}/>
                </FormGroup>
                <FormGroup controlId="formHorizontalSubstantiationRows">
                     <p>Rows:</p>
                     <Col sm = {8}>
                       <FormControl componentClass = "select" 
                                    placeholder = "Rows:"
                                    onChange={this.handleSubstantiationRowsChange}>
                         <option value = "10" >10</option>   
                         <option value = "15" >15</option> 
                         <option value = "20" >20</option> 
                         <option value = "25" >25</option>
                         <option value = "30" >30</option>
                         <option value = "35" >35</option>
                         <option value = "40" >40</option>
                       </FormControl>  
                     </Col>
                </FormGroup>
            </Form>
            </div>
            }
            { this.state.displaySubstantiationTable == "true" &&
           <div>
           <Button bsStyle="primary" onClick={this.handleAddSubstantiation}> Add Substantiation </Button>
           <table border = "1">
             <tbody>
               <tr>
                 <th>Substantiation</th>
                 <th>File Name</th> 
                 <th>File Title</th>
                 <th>Source</th>
                 <th>Action</th>
               </tr>
               <tr>
                 <td colSpan="1">{this.state.substantiationVal}</td>
                 <td></td> 
                 <td></td>
                 <td></td> 
                 <td></td>
               </tr>
              </tbody> 
           </table>
           </div>  
         }    
          </Tab>
        </Tabs>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      claimHdrData: state.navToDetail
    };
  };

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        saveClaims
      },
      dispatch
    );
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateClaimDetails);
  
  