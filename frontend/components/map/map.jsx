import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});



// function getUserLocation(){
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(function(position){
//       if(position){
//         resolve(position.coords);
//       } else {
//         reject({lat: 40.5865, lng: -122.3917});
//       }
//     });
//   });
// }
//
// function setCenter() {
//   let prom = getUserLocation();
//   prom.then(val => {
//     console.log(val);
//     return {lat: val.latitude, lng: val.longitue};
//   }, val => (val));
// }
//

  // const relocate = new google.maps.LatLng(centerLat, centerLng);
  // map.setCenter(relocate);

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // SF
  zoom: 13
};


class Map extends Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));

    if (this.props.singleBench) {
      this.props.fetchSpot(this.props.spotId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.spots);
    }
  }

  componentDidUpdate() {
    if(this.props.currentSpot){
      this.MarkerManager.updateMarkers([this.props.spots[Object.keys(this.props.spots)[0]]]); //grabs only that one bench
    } else {
      this.MarkerManager.updateMarkers(this.props.spots);
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
        //FIX use filter actions here to dictate how may spots to lad
    });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(bench) {
    this.props.router.push(`benches/${bench.id}`);
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "spot/new",
      query: coords
    });
  }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(Map);
