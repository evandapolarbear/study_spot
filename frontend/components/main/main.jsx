import React from 'react';
import { Link } from 'react-router';

import GreetingContainer from '../greeting/greeting_container';
import SpotMap from '../map/map';

const Main = ({ spots, updateFilter, requestSpots, setCurrentSpot, children }) => (
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
        {children}
      </div>
    </div>
  </div>
);

export default Main;
