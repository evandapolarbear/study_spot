import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentShow extends React.Component {
  constructor(props) {
    super(props)

    this.renderLis = this.renderLis.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
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

  renderLinks(){
    const user = this.props.currentUser;
    const spotId = this.props.currentSpot.id;

    if(user){
      return (
        <div>
          <Link to={`/spot/${spotId}`}>Details</Link>
          <Link to={`/spot/${spotId}/comment/new`}>Create Comment</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={`/spot/${spotId}`}>Show Comments</Link>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        {this.renderLinks()}
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
