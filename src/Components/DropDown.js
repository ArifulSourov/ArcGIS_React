import React, { Component } from 'react';
//import Axios from 'axios';
// import * as ReactBootStrap from 'react-bootstrap'

class DropDown extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: [],
            isLoaded: true,
            district: [],
        }
        // let [items] = this.setState
        // console.log(items.drawingInfo.renderer.uniqueValueInfos.value)
    }

    componentDidMount() {
        fetch('http://103.58.93.172/tillerwebadaptor/rest/services/DPHE/Bangladesh/MapServer/0?f=pjson')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoaded: false,
                    item: responseJson.drawingInfo.renderer.uniqueValueInfos,
                    district: responseJson.fields,
                    
                })
                
                
            })
            .catch((error) =>{
                console.log(error)
            })
            
    }
    handleChange = (itemD) => {
        const value = itemD.target.value;
        this.setState({
            value: value
            
        });
        
        console.log(value)
        
    };
    
    
    render() {
        const {item} = this.state;
        const itemDropdown = item.map((division, index)=> (
            <option key={index}>{division.value}</option>
      
        ))
        const {district} = this.state;
        const dist = district.map((districts, i)=> (
        <option key={i}>{districts.alias}</option>

        )) 
    
        //console.log(dist)
        //console.log(itemDropdown)
        return (

            <div>
                <div>
                    <select onChange = {this.handleChange}>
                        {itemDropdown}
                    </select>
              
                    <select onChange = {this.handleChange}> 
                        {dist} 
                    </select> 
                </div>
            </div>
            
        );
        
    }
}

export default DropDown;
