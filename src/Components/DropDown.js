import React, {
    Component
} from 'react';
import * as ReactBootStrap from 'react-bootstrap'

class DropDown extends Component {
    constructor() {
        super()
        this.state = true;
    }

    render() {
        return ( 
        <div >
            <ReactBootStrap.DropdownButton variant = 'transparent' id = "dropdown-button" title = "Dropdown button" >
                <ReactBootStrap.Dropdown.Item> Action </ReactBootStrap.Dropdown.Item>  
                <ReactBootStrap.Dropdown.Divider / >
                <ReactBootStrap.Dropdown.Item > Another action </ReactBootStrap.Dropdown.Item> 
                <ReactBootStrap.Dropdown.Divider / >
                <ReactBootStrap.Dropdown.Item > Something else </ReactBootStrap.Dropdown.Item> 
                </ReactBootStrap.DropdownButton>

                </div>
        );
    }
}

export default DropDown;