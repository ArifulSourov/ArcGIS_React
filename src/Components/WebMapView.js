import React from 'react';
import { loadModules } from 'esri-loader';

export class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    // this.state =  this.mapImageLayer;
    
  }
  // async componentDidMount() {
  //   const url = "http://103.58.93.172/tillerwebadaptor/rest/services/DPHE/Bangladesh/MapServer";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data)
  // }
  // componentDidMount() {

  //   this.getData();
  // }

  // getData() {

  //   let division_sublayer = mapImageLayer.findSublayerById(0);
  //   let divisionquery = division_sublayer.createQuery();
  //   divisionquery.where = "Division is not null";
  //   divisionquery.outFields = ["Division"];
  //   divisionquery.displayFieldName = ["Division"];
  //   divisionquery.returnDistinctValues = true;
  //   divisionquery.returnGeometry = false;

  //   division_sublayer.queryFeatures(divisionquery).then(function (response) {
  //     response.features.forEach(function (arrayItem) {
  //       let division = arrayItem.attributes.division;
  //       let el = document.createElement("option");
  //       el.textContent = division;
  //       el.value = division;
  //       //dropdivision.appendChild(el);
  //       // console.log(el);

  //     });

  //   });
  // }
  
 
  render() {
    
    loadModules(["esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/widgets/LayerList",
        "esri/widgets/Legend",
        "esri/widgets/Expand",
        "esri/widgets/ScaleBar",
        "esri/widgets/Home"
      ], {
        css: true
      })
      .then(([ArcGISMap, MapView, MapImageLayer, LayerList, Legend, Expand, ScaleBar, Home]) => {
          const mapImageLayer = new MapImageLayer({
            id: 0,
            url: "http://103.58.93.172/tillerwebadaptor/rest/services/DPHE/Bangladesh/MapServer",
            sublayers: [{
              title: "Division",
              id: 0,
              source: {
                type: "map-layer",
                mapLayerId: 0

              }
            }]
          });
          const map = new ArcGISMap({
            basemap: "streets",
            layers: [mapImageLayer]
          });


          const mapview = new MapView({
            container: this.mapRef.current,
            map: map,
            center: [90, 24],
            zoom: 7
          });
          mapview.when(function () {

          const layer_List = new Expand({
            content: new LayerList({
              view: mapview
            }),
            view: mapview,
            expanded: false
          });

          const legend = new Expand({
            content: new Legend({
              view: mapview
            }),
            view: mapview,
            expanded: false
          });

          const scaleBar = new ScaleBar({
            view: mapview,
            unit: "metric",
            style: "chart"
          });

          const home = new Home({
            view: mapview,
          })

          mapview.ui.add(layer_List, "top-right");
          mapview.ui.add(legend, "bottom-left");
          mapview.ui.add(scaleBar, "bottom-right");
          mapview.ui.add(home, "top-left");

          });
        })
    return (
      <div className="webmap" ref={this.mapRef}>
        </div>
      
    );
  }
}

export default WebMapView;

