import React from 'react';
import { Link } from 'react-router';

import GreetingContainer from '../greeting/greeting_container';
import SpotMap from '../map/map';

class Main extends React.Component {
  constructor(props){
    super(props);

  }

  childDecider(){
    if(this.props.children){
      return this.props.children;
    } else {
      return (
        <h4 className='instructions'>Please Select a spot to view its details or select an empty spot on the map.</h4>
      );
    }
  }

  render(){
    const spots = this.props.spots;
    const updateFilter = this.props.updateFilter;
    const requestSpots = this.props.requestSpots;
    const setCurrentSpot = this.props.setCurrentSpot;

    return (
      <div className='main'>
        <header>
          <Link to="/" className="header-link"><h1>Study Spot</h1></Link>
          <GreetingContainer/>
        </header>

        <div className="content">
          <div className='left-half-main'>
            <SpotMap spots={spots}
              updateFilter={updateFilter}
              requestSpots={requestSpots}
              setCurrentSpot={setCurrentSpot}
              />
          </div>

          <div className='right-half-main'>
            {this.childDecider()}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
