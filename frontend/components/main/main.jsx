import React from 'react';

import SpotMap from '../map/map';
import SpotShowContainer from '../spot_show/spot_show_container';

const Main = ({ spots, updateFilter, requestSpots, setCurrentSpot }) => (
  <div className='main'>
    <div className='map'>
      <div className='left-half-main'>
        <SpotMap spots={spots}
          updateFilter={updateFilter}
          requestSpots={requestSpots}
          setCurrentSpot={setCurrentSpot}
          />
      </div>
    </div>

    <div className='right-half-main'>
      <SpotShowContainer />
    </div>
  </div>
);

export default Main;
