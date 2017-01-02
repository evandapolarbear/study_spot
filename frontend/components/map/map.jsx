import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // SF
  zoom: 13
};

class BenchMap extends Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches);
    }

    var infoWindow = new google.maps.InfoWindow({map: map});

    let handleLocationError = (browserHasGeolocation, iWindow, pos) =>{
      iWindow.setPosition(pos);
      iWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
    };

    if (window.navigatior.geolocation){
      window.navigator.geolocation.getCurrentPosition(function(position){
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitue
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      },
        function() {
          handleLocationError(true, infoWindow, map.getCenter());
      });

    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  componentDidUpdate() {
    if(this.props.singleBench){
      this.MarkerManager.updateMarkers([this.props.benches[Object.keys(this.props.benches)[0]]]); //grabs only that one bench
    } else {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
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
      pathname: "benches/new",
      query: coords
    });
  }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default BenchMap;
