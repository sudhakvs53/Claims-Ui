import React, {Component} from "react";
import PropTypes from "prop-types";
import {
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
    MenuItem
    
    // Checkbox
} from "react-bootstrap";

class CreateClaimForm extends Component {

    constructor(props) {
        super(props);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.handleProjTitleInput = this.handleProjTitleInput.bind(this);
        this.handleNeedStateSelection = this.handleNeedStateSelection.bind(this);
        this.handleProductFormSelection = this.handleProductFormSelection.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.moveToClaimDetails = this.moveToClaimDetails.bind(this);

        
        this.state = {
            selectedClaimType: '1',
            projTitle: '',
            needState: '',
            prdctForm: ''
        }
    }

    onMenuItemClick(e) {

        this.setState({
            projTitle: '',
            needState: '',
            prdctForm: ''
        })
        
        this.setState({selectedClaimType: e});

        this.setState({projTitle: "Enter a Project Title"});

        
    }

    handleProjTitleInput = e => { 
      
      this.setState({projTitle: e.target.value});
      //console.log('Project Title Value Entered By User : '+this.state.projTitle);
    }

    handleNeedStateSelection = e => {

        let needStateVal = e.target.selectedIndex;
        //console.log(needStateVal);
        this.setState({needState: needStateVal});
        //console.log('NeedState Value Selected By User : '+this.state.needState);
    }

    handleProductFormSelection(e) { 

        let prdctFormValue = e.target.selectedIndex;
        this.setState({prdctForm: prdctFormValue});
        //console.log('Product Form Value Selected By User : '+this.state.prdctForm);
    }

    handleListItemSelection = (key) => {
       
        if(this.state.selectedClaimType == key)
          return 'active'

        return "";
    }
    
    handleButton = () => {
        if(this.state.selectedClaimType == 1 && this.state.projTitle!=''&&this.state.needState!=''&&this.state.prdctForm!='')
          return "";
        else if(this.state.selectedClaimType == 2 && this.state.projTitle!=''&&this.state.needState!='')
          return "";
        else if(this.state.selectedClaimType == 3 && this.state.projTitle!=''&&this.state.needState!='')
          return "";
        else
          return "disabled";  
           
    }

    moveToClaimDetails = (path) => {
        
        if(this.handleButton() === "disabled") return false;
         
        this.props.history.push({
            pathname: path,
            state: { projTitle: this.state.projTitle,
                     needState: this.state.needState,
                     prdctForm: this.state.prdctForm,
                     claimType: this.state.selectedClaimType
            }
          })
      }

    render() {
        return (<div>
                  <div className="pull-right">
                   <DropdownButton
                     title="New"
                     id="dropdown1">
                     <MenuItem onSelect={this.onMenuItemClick} eventKey="1">Product</MenuItem>
                     <MenuItem onSelect={this.onMenuItemClick} eventKey="2">Brand</MenuItem>
                     <MenuItem onSelect={this.onMenuItemClick} eventKey="3">Experience</MenuItem>
                   </DropdownButton>
                </div> 
                <div className="titleClass">
                    <h4>Create New {this.state.selectedClaimType==1?'Product':this.state.selectedClaimType==2?'Brand':'Experience'} Claim</h4>
                </div>
                <Col sm={7}>    
                <Form horizontal>
                  <FormGroup controlId="formHorizontalProjTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                            Project Title:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="project" placeholder="Enter a Project Title" onChange={this.handleProjTitleInput}
                                    value={this.state.projTitle}
                                    ref={(input) => { this.textInput = input; }}/>
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalNeedState">
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Need State:
                     </Col> 
                     <Col sm = {8}>
                       <FormControl componentClass = "select" 
                                    placeholder = "Need State:"
                                    value={this.state.needState}
                                    onChange={this.handleNeedStateSelection}>
                         <option value = "0" >Select a Need State</option>   
                         <option value = "1" > Baby </option> 
                         <option value = "2" > Beauty </option> 
                         <option value = "3" > Feminine Care </option> 
                         <option value = "4" > Hair Care </option> 
                         <option value = "5" > Oral Care </option> 
                         <option value = "6" > OTC </option> 
                         <option value = "7" > Wound Care </option>
                       </FormControl>  
                     </Col>    
                  </FormGroup>
                  <div className={this.state.selectedClaimType=='2'?'hidden':this.state.selectedClaimType=='3'?'hidden':''}>
                  <FormGroup controlId="formHorizontalPrdctForm">
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Product Form:
                     </Col> 
                     <Col sm = {8}>
                       <FormControl componentClass = "select" placeholder = "Product Form:"
                                    value={this.state.prdctForm}
                                    onChange={this.handleProductFormSelection}>
                         <option value = "0" > Select a Product Form </option>   
                         <option value = "1" > Aerosol </option> 
                         <option value = "2" > Bandage </option> 
                         <option value = "3" > Caplet </option> 
                         <option value = "4" > Capsule </option> 
                       </FormControl>  
                     </Col>    
                  </FormGroup>
                  </div>
                  </Form>
                  </Col>
                  <Col sm={5}>
                  <div>
                    <Col sm={3}>  
                      <p>Claim Type:</p>  
                      <ListGroup>
                        <ListGroupItem className={this.handleListItemSelection(1)}>Product</ListGroupItem>
                        <ListGroupItem className={this.handleListItemSelection(2)}>Brand</ListGroupItem>
                        <ListGroupItem className={this.handleListItemSelection(3)}>Experience</ListGroupItem>
                      </ListGroup>
                    </Col>
                  </div>    
                  <ButtonToolbar>
                     <Col smOffset={2} sm={12}>
                       <Button id="button1" type="submit" className={this.handleButton()} bsStyle="primary" onClick={() => this.moveToClaimDetails('/claimDetails')} >Create New Claim</Button>
                       <Button type="submit" className="btnClass">Cancel</Button>
                     </Col>
                  </ButtonToolbar>
                
                </Col>
            </div>);
    }
 }      

export default CreateClaimForm;