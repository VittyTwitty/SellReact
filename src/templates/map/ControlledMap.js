import React from 'react';
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

import {
  compose,
  withProps,
  withState,
  withHandlers,
  lifecycle
} from "recompose";
// import FaAnchor from "react-icons/lib/fa/ancho";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";


const MapWithControlledZoom = compose(
  lifecycle({
    componentWillMount() {
      this.setState({markers_multiple: ['1', '2']});
      console.log(this.props.address);
    },
    componentDidMount() {
      this.setState({
        markers_multiple: this.props.address
      })
    }
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBGyWv7ILhUGLZzZMF_gSK0d7zwH1HPudw&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withState('zoom', 'onZoomChange', 12),
  withHandlers(() => {
    const refs = {
      map: undefined,
      rectangle: [],
      polygon: [],
      circle: []
    };
    let deleteShapes =  () => {
      refs.rectangle = [];
      refs.polygon = [];
      refs.circle = [];
      console.log('1')
    };

    console.log(refs);
    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({onZoomChange}) => () => {
        onZoomChange(refs.map.getZoom())
      },
      handleRectangleComplete: () => (ref) => {
        refs.rectangle = [];
        refs.rectangle = ref.bounds;
        console.log(refs.rectangle)
      },
      handlePolygonComplete: () => (ref) => {
        refs.polygon = [];
        refs.polygon.push(ref.Yd.Ea.I);
        refs.polygon.push(ref.Yd.Ea.J);
        refs.polygon.push(ref.Yd.Ea.K);
        refs.polygon.push(ref.Yd.Ea.L);
        console.log(ref.latLngs.b[0].b[0].lat());
        console.log(ref.latLngs.b[0]);
        ref.latLngs.b[0].b.forEach((element) => {
          console.log(element.lat(), element.lng())

        })
      },
      handleCircleComplete: () => (ref) => {
        deleteShapes();
        refs.circle = [];
        console.log(ref);
        console.log(refs);
        console.log(ref.center.lat(), ref.center.lng(), ref.radius);
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{lat: -34.397, lng: 150.644}}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
    address={props.address}
  >

    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.NONE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#00ffff`,
          fillOpacity: .2,
          strokeWeight: 2,
          clickable: false,
          editable: false,
          zIndex: 1
        },
        polygonOptions: {
          fillColor: `#ffff00`,
          fillOpacity: .2,
          clickable: true,
        }
      }}
      onRectangleComplete={props.handleRectangleComplete}
      onPolygonComplete={props.handlePolygonComplete}
      onCircleComplete={props.handleCircleComplete}

    />
    <div>dsdsdsd</div>
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {
        props.address.map((element, index) =>
          <Marker
            key={index}
            position={{lat: element.lat, lng: element.lng}}
            onClick={props.onToggleOpen}
          >
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <img src="" alt=""/>
                Controlled zoom: {props.zoom}
              </div>
            </InfoWindow>
          </Marker>
        )
      }
    </MarkerClusterer>
  </GoogleMap>
);

export default MapWithControlledZoom;