import React from 'react';
import { Link, withRouter } from 'react-router';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);

    this.checkForCurrentSpot = this.checkForCurrentSpot.bind(this);
  }

  renderYesNo(bool){
    if(bool){
      return "Yes";
    } else{
      return "No";
    }
  }

  cap(str){
    return str[0].toUpperCase() + str.slice(1);
  }

  checkForCurrentSpot(){
    const spot = this.props.currentSpot;
    if (spot){
      return (
        <div>
          <h1>Spot: {spot.name}</h1>
          <h2>Network: {spot.network_name}</h2>
          <h2>Password: {spot.password}</h2>
          <h3>Plugs: {this.renderYesNo(spot.plugs)}</h3>
          <h3>Coffee: {this.renderYesNo(spot.coffee)}</h3>
          <h3>Bar: {this.cap(spot.bar)}</h3>
        </div>
      );
    } else {
      return (
        <h1>
          Please Select a spot
        </h1>
      );
    }
  }

  render(){
    return (
      <div>
        {this.checkForCurrentSpot()}
      </div>
    );
  }
}

export default withRouter(SpotShow);