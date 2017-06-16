import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentShow extends React.Component {
  constructor(props) {
    super(props)

    this.renderLis = this.renderLis.bind(this);
  }

  renderLis(){
    console.log(this.props.comments);
    this.props.comments.map(comment => {
      return (
        <li>
          {comment.body}
        </li>
      )
    })
  }

  render(){
    return(
      <div>
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
