import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			body: ''
		}

		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.cancelComment = this.cancelComment.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		let comment = {
			comment : {
      	user_id: this.props.userId,
      	spot_id: this.props.spotId,
      	body: this.state.body
    	}
		}

		this.setState({body: ''})
		this.props.createComment(comment)
	}

	update(e){
		this.setState({body: e.target.value})
	}

	cancelComment(){
		const id = this.props.spotId;
		this.props.router.push(`spot/${id}`)
	}

	render() {
		let spot = this.props.spotName;
		let user = this.props.username;

		return (
      <div>
				<form>
					<label>
						Comment on {spot} as {user}
						<textarea type="text" value={this.state.body} onChange={this.update}/>
						<button onClick={this.handleSubmit}>Submit</button>
					</label>
					<button onClick={this.cancelComment}>Cancel</button>
				</form>
      </div>
		);
	}
}

export default withRouter(CommentForm);
