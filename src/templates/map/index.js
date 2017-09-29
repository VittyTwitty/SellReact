import React from 'react';
import ReactDOM from 'react-dom';
import VitMap from "./VitMap";
import './map.scss';

let dataForMaps = [
  {
    lat: -34.397,
    lng: 150.644
  },
  {
    lat: -34.380,
    lng: 150.644
  },
  {
    lat: -34.380,
    lng: 150.674
  },
  {
    lat: -34.397,
    lng: 150.660
  },
  {
    lat: -34.387,
    lng: 150.660
  },
  {
    lat: -34.377,
    lng: 150.660
  },
  {
    lat: -34.367,
    lng: 150.660
  },
  {
    lat: -34.357,
    lng: 150.660
  }
];


ReactDOM.render(
  <VitMap addressData={dataForMaps}/>,
  document.getElementById('v-map')
);