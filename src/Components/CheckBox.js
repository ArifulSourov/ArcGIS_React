import React, { Component } from 'react';
import '../map.css'
class CheckBox extends Component {
    constructor() {
        super()
        this.state = {
            item: [],
            isLoaded: true,
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

                })


            })
        // .catch((error) =>{
        //     console.log(error)
        // })

    }
    
    render() {
        const {item} = this.state;
        // const itemDropdown = item.map(division => ( 
        //     <div key = {division.symbols} >
        //     <div > {division.value}

        //     </div>

        //     </div>

        // ))
        return (
            <div className="filter">
                Chart & other things like filtering options might be here
                <ul>
                    {item.map(division =>(
                        <li key={division.label}>
                            {division.value}

                        </li>

                    ))}
                </ul>
                
            </div>
        );
    }
}

export default CheckBox;
