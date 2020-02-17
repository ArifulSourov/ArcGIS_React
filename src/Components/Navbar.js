import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import DropDown from './DropDown'

class Navbar extends Component {
    constructor(){
        super()
        this.state = true
    }
    
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <ReactBootStrap.Navbar.Brand href="#home">Home</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <DropDown />
                        <DropDown />
                        <DropDown />
                    </ReactBootStrap.Nav>
                    
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        );
    }
}

export default Navbar;