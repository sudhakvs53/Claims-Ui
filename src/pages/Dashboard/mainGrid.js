//@flow
import React, { PropTypes, Component } from "react";
import { AgGridReact } from "ag-grid-react";


export default class MainGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverData: props.server,
            columnDefs: this.createColumnDefs(),
            getRowStyle: (params) => this.rowStyleOptions(params),
            defaultColDef: this.defaultColDef(),
            rowClass: 'grid_row',
            getRowHeight: (params) => this.rowHeight(),
            headerHeight: 31,
            showDetails: false
        }

        this.immutableStore = [];
        this.onGridSizeChanged = this.onGridSizeChanged.bind(this);
        this.getRowNodeId = this.getRowNodeId.bind(this);
        // this.rowEditableStatus = this.rowEditableStatus.bind(this);
        this.gridOptions = {
            onModelUpdated: function() {
                console.log('event onModelUpdated received');
            }

        }
    }
    rowHeight() {
        return 31
    }


    componentWillMount() {
        //  axios.get(URL)
        // .then(response => {
        //     response.data;
        //     this.setState({
        //         serverData:  response.data.slice(0,2)
        //     });
        //     console.log("GET", response.request.status,"-",response.request.statusText);
        // });

    }
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState) {

    }

    componentWillReceiveProps(nextProps) {

        this.setState({serverData: nextProps.server});

    }


    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        //this.gridApi.sizeColumnsToFit();
    }

    onGridSizeChanged(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();

    }

    getRowNodeId(data) {
        return data.symbol;
    }

    defaultColDef() {
        return {
            minWidth: 130,
        }
    }
    
    createColumnDefs() {

        return [{
                headerName: "Project Title",
                field: "project_title",
                minWidth: 120,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "right" },
            },
            {
                headerName: "Version",
                field: "project_version",
                //    minWidth: 140,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "left" },
            },
            {
                headerName: "Type",
                field: "claim_type",
                //   minWidth: 130,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "right" },
            },
            {
                headerName: "Need State",
                field: "need_state",
                //    minWidth: 140,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "left" },
            },
            {
                headerName: "Region",
                field: "region",
                minWidth: 100,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "right" },
            },
            {
                headerName: "Benefit Area",
                field: "benefit_area",
                minWidth: 100,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "right" },
            },
            {
                headerName: "Product Form",
                field: "product_form",
                minWidth: 100,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "center" },
            },
            {
                headerName: "Status",
                field: "project_status",
                minWidth: 100,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "center" },
            },
            {
                headerName: "Claim",
                field: "claim_name",
                //    minWidth: 250,
                editable: params => this.rowEditableStatus(params),
                cellStyle: { textAlign: "left" },
            },
            {
                headerName: "Claim ID",
                field: "claim_id",
                //    minWidth: 140,
                cellStyle: { textAlign: "center" },
                editable: false,
            },
            {
                headerName: "Created By",
                field: "created_by",
                minWidth: 100,
            },
        ]

    }

    rowStyleOptions = (params) => {
        if (params.data.statusType == true) {
            return {
                background: '#092A4D',
                color: "#fff",
            }
        } else {
            return {
                background: '#144c87',
                color: "#fff",
            }
        }
    }

    // function check inside obj properties return true||false
    rowEditableStatus(params) {
        let edit = params.node.data.statusType;
        if (edit === true) {
            return true
        } else {
            return false
        }
    }

    render() {
        return ( <div style = {
                { width: "100%", height: 400 }
            }
            className = "grid">
            <div style = {
                { width: "100%", height: "100%", boxSizing: "border-box" }
            }
            className = "ag-fresh ">
            <AgGridReact
            // properties
            getRowStyle = { this.state.getRowStyle }
            columnDefs = { this.state.columnDefs }
            rowData = { this.state.serverData }
            defaultColDef = { this.state.defaultColDef }
            deltaRowDataMode = "true"
            rowClass = { this.state.rowClass }
            getRowHeight = { this.state.getRowHeight }
            headerHeight = { this.state.headerHeight }
            // rowClassRules             
            // enableSorting='true'
            // enableFilter='true'
            // enableColResize
            editType = 'fullRow'
            enableRangeSelection
            //rowSelection="multiple"                         
            // events
            getRowNodeId = { this.getRowNodeId }
            onGridReady = { this.onGridReady }
            onGridSizeChanged = { this.onGridSizeChanged } >
            </AgGridReact>  
            </div> 
            </div>

        );
    }
};