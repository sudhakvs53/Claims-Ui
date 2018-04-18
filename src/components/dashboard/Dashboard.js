import React from 'react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import ReactTooltip from 'react-tooltip';
import MainGrid from './mainGrid';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        return fetch('http://localhost:3002/get_project_claims', {method: 'GET'}).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).then((response) => response.json()).then((data) => this.setState({data}));
    }

    render() {
        return (
            <div className='wrapper_grid'>
                <span className='header_description'>Claims</span>
                <div className='grid_container'>
                    <MainGrid server={this.state.data}/>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {     return {claimHdrData:
// state.navToDetail, clmData: state.saveClaims, fetchClmData:
// state.fetchClaims}; }; function mapDispatchToProps(dispatch) {     return
// bindActionCreators({         fetchAllClaims     }, dispatch); }

export default Dashboard;