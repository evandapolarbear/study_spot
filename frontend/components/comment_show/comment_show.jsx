import React from 'react';
import { Link, withRouter } from 'react-router';

import NavBar from '../nav_bar/nav_bar'

class CommentShow extends React.Component {
  constructor(props) {
    super(props)

    this.renderLis = this.renderLis.bind(this);
  }

  renderLis(){
    this.props.comments.map(comment => {
      return (
        <li>
          {comment.body}
        </li>
      )
    })
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
        <ul>
          {this.props.comments.map((comment,i) =>
            <li key={i}>{comment.body}</li>
          )}
        </ul>
      </div>
    )
  }

}

export default withRouter(CommentShow)
