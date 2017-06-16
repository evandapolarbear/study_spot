import { connect } from 'react-redux';

import CommentShow from './comment_show';

const mapStateToProps = state => ({
  currentSpot: state.spots.currentSpot,
  comments: state.spots.currentSpot.comments,
  currentUser: state.session.currentUser
});

export default connect (
  mapStateToProps
)(CommentShow);
