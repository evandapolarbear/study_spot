import React from 'react';

import SpotMap from '../map/map';

const Main = ({ spots, updateFilter }) => (
  <div className='main'>
    <div className='map'>
      <h3>
        Map Goes Here
      </h3>
      <SpotMap spots={spots}
        updateFilter={updateFilter}/>
    </div>
  </div>
);

export default Main;
