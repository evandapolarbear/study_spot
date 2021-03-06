import React from 'react';
import { Link, withRouter } from 'react-router';

import NavBar from '../nav_bar/nav_bar';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);

    this.checkForCurrentSpot = this.checkForCurrentSpot.bind(this);
    this.deleteCurrentSpot = this.deleteCurrentSpot.bind(this);
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

  deleteCurrentSpot(id){
    const spot = this.props.currentSpot;
    if (spot) {
      this.props.deleteSpot(spot.id);
      this.props.setCurrentSpot(null);
      window.location.reload(true)
    }
  }

  checkForCurrentSpot(){
    const spot = this.props.currentSpot;
    const formBool = this.props.user !== null ? true : false;

    if (spot !== null){
      return (
        <div>
          <NavBar
            details={false}
            form={formBool}
            commentShow={true}
            id={spot.id}/>
          <h1>Spot: {spot.name}</h1>
          <h2>Network: {spot.network_name}</h2>
          <h2>Password: {spot.password}</h2>
          <h3>Plugs: {this.renderYesNo(spot.plugs)}</h3>
          <h3>Coffee: {this.renderYesNo(spot.coffee)}</h3>
          <h3>Bar: {this.cap(spot.bar)}</h3>
          <div>
            <button onClick={this.deleteCurrentSpot}>
              Delete
            </button>
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
