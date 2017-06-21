import React from 'react';
import { Link, withRouter } from 'react-router';

import NavBar from '../nav_bar/nav_bar'

class CommentShow extends React.Component {
  constructor(props) {
    super(props)

    this.renderLis = this.renderLis.bind(this);
  }

  renderLis(){
    if (this.props.comments.length === 0) {
      console.log('here');
      return (
        <h1>No One has Commented Yet!</h1>
      )
    } else {
      return (
        <ul>
          {this.props.comments.map((comment,i) =>
            <li key={i}>{comment.body}</li>
          )}
        </ul>
      )
    }
  }

  render() {
    const user = this.props.currentUser;
    const spotId = this.props.currentSpot.id;

    return(
      <div>
        <NavBar
          details={true}
          commentShow={false}
          form={user}
          id={spotId}/>
        {this.renderLis()}
      </div>
    )
  }

}

export default withRouter(CommentShow)
