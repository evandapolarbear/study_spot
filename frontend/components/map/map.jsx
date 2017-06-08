import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router';
import {getLocationByHTTPS, getLocationByIp} from '../../util/location_services'

import MarkerManager from '../../util/marker_manager';
import SpotFormContainer from '../spot_form/spot_form_container';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = (lat, lng) => {
  lat = lat === undefined ? 37.773972 : lat
  lng = lng === undefined ? -122.431297 : lng
  return({
    center: {lat, lng}, // SF
    zoom: 12,
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{color: "#018080"}]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{color: "#FAFFDB"}]
      }
    ]
  })
};


class Map extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.requestSpots();
  }

  componentDidMount() {
    let location = {latitude: 37.773972, longitude: -122.431297};


    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions(location.latitude, location.longitude));
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));

    if (this.props.singleBench) {
     //FIX currently unused
     this.props.fetchSpot(this.props.spotId);
    } else {
     this._registerListeners();
     this.MarkerManager.updateMarkers(this.props.spots);
    }

    






    // NOTE: will only work when getUserlocation is imported and when HTTPS enabled
    // let locP = getUserLocation();
    //
    // locP.then(res => {
    //       location = res;
    //     })
    //     .then(() =>{
    //       const map = this.refs.map;
    //       this.map = new google.maps.Map(map, _mapOptions(location.latitude, location.longitude));
    //       this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    //
    //       if (this.props.singleBench) {
    //         //FIX currently unused
    //         this.props.fetchSpot(this.props.spotId);
    //       } else {
    //         this._registerListeners();
    //         this.MarkerManager.updateMarkers(this.props.spots);
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
  }

  componentDidUpdate() {
    if(this.props.currentSpot){
      this.MarkerManager.updateMarkers([this.props.spots[Object.keys(this.props.spots)[0]]]); //grabs only that one spot FIX unused
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

  _handleMarkerClick(spot) {
    this.props.router.push(`spot/${spot.id}`);
    this.props.setCurrentSpot(spot);
  }

  _handleClick(coords) {
    this.props.router.push({
      pathname: "spot/new",
      query: coords
    });
  }

  render() {
    return (
      <div className="map" ref="map">Map
      </div>
    );
  }
}

export default withRouter(Map);
