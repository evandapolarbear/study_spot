import { connect } from 'react-redux';

import { createComment } from '../../actions/comment_actions';

import CommentForm from './comment_form';

const mapStateToProps = ({session : { currentUser },
                          spots : { currentSpot }
                        }) => {

  const userId = currentUser.id;
  const spotId = currentSpot.id;
  const username = currentUser.username;
  const spotName = currentSpot.name;

  return ({userId, spotId, username, spotName});

}

const mapDispatchToProps = dispatch => ({
  createComment: data => dispatch(createComment(data)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
