import { connect } from 'react-redux';

import CommentShow from './comment_show';

const mapStateToProps = state => ({
  comments: state.spots.currentSpot.comments
});

export default connect (
  mapStateToProps
)(CommentShow);
