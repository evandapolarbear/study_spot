import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);

	}

  componentDidMount() {
    console.log("hereree");
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props);
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
