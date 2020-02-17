import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import './map.css'
import CheckBox from './Components/CheckBox'
import WebMapView from './Components/WebMapView';




function App() {

  return (
    <div className="App">
      <div className="topview">
        <h1>Hello</h1>
        <h1>BD Map</h1>
      </div>

      <Navbar />
      <WebMapView />
      <CheckBox />

    </div>
  );
}

export default App;
