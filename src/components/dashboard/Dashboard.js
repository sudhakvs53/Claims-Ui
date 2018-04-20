import React from 'react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import ReactTooltip from 'react-tooltip';
import MainGrid from './mainGrid';
import Header from './Header.js';
import { fetchAllClaims } from '../../actions/claimsAction';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {
    Grid,
    Row,
    Col,
    Breadcrumb,
    DropdownButton,
    MenuItem
} from 'react-bootstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.props.fetchAllClaims();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.claims.claimsFetched) {
            this.setState({ data: nextProps.claims.data });
        }
    }

    render() {
        return (
            <Grid style={{ width: "100%" }}>
                <Row >
                    <Header />
                </Row>
                <Row className="sub-nav">
                    <Col componentClass="span" >
                        <Breadcrumb className="breadcrumbs">
                            <Breadcrumb.Item className="home-icon" />
                        </Breadcrumb>
                    </Col>
                    <Col componentClass="span" className="pull-right">
                        <DropdownButton id="request_type" className="new-req-button" title="New">
                            <MenuItem>Product</MenuItem>
                            <MenuItem>Brand</MenuItem>
                            <MenuItem>Experience</MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <MainGrid server={this.state.data} />
                </Row>
            </Grid >
        );
    }
}


const mapStateToProps = (state) => {
    return { claims: state.fetchAllClaims };
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAllClaims
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
