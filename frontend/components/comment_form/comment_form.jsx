import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);

	}

  componentDidMount() {
    let comment = {comment : {
      user_id: this.props.userId,
      spot_id: this.props.spotId,
      body: "this is how comment should be structured"
    }}


		// console.log(this.props.createComment);
    // this.props.createComment(comment);
  }

	render() {
		return (
      <div>
        <h4>Comment Component Rendering herrrrrr</h4>
      </div>
		);
	}

}

export default withRouter(CommentForm);
