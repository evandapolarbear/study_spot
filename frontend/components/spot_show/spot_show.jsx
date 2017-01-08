import React from 'react';
import { Link, withRouter } from 'react-router';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div>
        <h1>Left Side</h1>
      </div>
    );
  }
}

export default withRouter(SpotShow);
