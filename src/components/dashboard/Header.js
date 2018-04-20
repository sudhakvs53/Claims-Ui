import React from 'react';
import {
    Nav,
    NavItem,
    Navbar,
    NavDropdown,
    Button,
    FormControl,
    FormGroup,
    Form,
    MenuItem,
    DropdownButton,
    Breadcrumb

} from 'react-bootstrap';

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
            <div>
                <Navbar className="navbar">
                    <Navbar.Header>
                        <Navbar.Brand className="claim-logo" />
                        <Navbar.Text>CLAIM MANAGEMENT</Navbar.Text>
                    </Navbar.Header>
                    <Nav>
                        <Navbar.Form>
                            <FormControl componentClass="select">
                                <option selected>Project</option>
                                <option>Product Name</option>
                                <option>Claim</option>
                                <option>Substantiation</option>
                                <option>Formula</option>
                                <option>Legacy Document</option>
                            </FormControl>
                            <FormGroup>
                                <FormControl className="claim-searchtext pull-left" type="text" placeholder="Enter Keywords" />
                                <Button onClick={this.handleBasicSearch} className="btn btn-default claim-index-search-button pull-left" disabled="true ">
                                    <i className="glyphicon glyphicon-search" />
                                </Button>
                            </FormGroup>
                        </Navbar.Form>
                    </Nav>
                    <Nav pullRight>

                        <Navbar.Text className="user-icon" />
                        <NavDropdown title="rensetty" className="user-dropdown">
                            <MenuItem style={{ 'padding-left': '0px' }}>Sign Out</MenuItem>
                        </NavDropdown>
                        <Navbar.Text className="question" />
                        <Navbar.Text className="help-link">
                            <Navbar.Link href="https://myapps.psso.its.jnj.com/ppolicy/legal.jsp" >
                                Help
                        </Navbar.Link>
                        </Navbar.Text>
                    </Nav>
                </Navbar>
            </div>
        );
    }

}