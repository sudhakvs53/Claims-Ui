import React from 'react';
import {
    Breadcrumb,
    DropdownButton,
    MenuItem
} from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="class2">
                    <Breadcrumb>
                        <Breadcrumb.Item className="homeIcon" />
                    </Breadcrumb>
                </div >
                {/* <div
                    className="pull-right"
                    style={{
                        marginRight: "25px",
                        marginTop: "-65px"
                    }}>
                    <DropdownButton title="New” >
                       <MenuItem onSelect={this.onMenuItemClick} eventKey="1">Product</MenuItem>
                <MenuItem onSelect={this.onMenuItemClick} eventKey="2”> Brand</MenuItem >
            <MenuItem onSelect={this.onMenuItemClick} eventKey="3">Experience</MenuItem>
                   </DropdownButton >
               </div > */}
            </div >
        );
    }
}