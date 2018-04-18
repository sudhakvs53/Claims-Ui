import React from 'react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import ReactTooltip from 'react-tooltip';
import MainGrid from './mainGrid';
import { fetchAllClaims } from '../../actions/claimsAction';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
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
        return (<div className="wrapper_grid">
            <span className="header_description">Claims</span>
            <div className="grid_container">
                <MainGrid server={this.state.data} />
            </div>
        </div>
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
