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
    // const id = this.props.currentSpot.id;
    // const deleteSpot = this.props.deleteSpot;

    if (spot !== null){
      return (
        <div>
          <h1>Spot: {spot.name}</h1>
          <h2>Network: {spot.network_name}</h2>
          <h2>Password: {spot.password}</h2>
          <h3>Plugs: {this.renderYesNo(spot.plugs)}</h3>
          <h3>Coffee: {this.renderYesNo(spot.coffee)}</h3>
          <h3>Bar: {this.cap(spot.bar)}</h3>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      );
    } else {
      return (
        <h2 className='instructions'>
          Please Select a spot to view its details or select an empty spot on the map.
        </h2>
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
