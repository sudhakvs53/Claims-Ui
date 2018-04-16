import React from "react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";
import ReactTooltip from 'react-tooltip';
import MainGrid from "./mainGrid";
import Helper from "./helper";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        Helper.fetchData('http://localhost:3002/get_project_claims', "1234").then((data) => {
            this.setState({ data });
        });
    }

    render() {
        return (<div className="wrapper_grid">   
                <span className="header_description">Claims</span>
                <div className="grid_container">
                 <MainGrid server={this.state.data}/>
                </div>
                </div>
        );
    }
}
export default Dashboard;