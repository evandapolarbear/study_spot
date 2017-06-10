import { CREATE_COMMENT } from '../actions/comment_actions'
import { createComment } from '../util/comment_api_util'
import merge from 'lodash/merge';

const _nullComments = {
  currentSpotComments: [],
  errors: []
}

const CommentReducer = (state = _nullComments, action) => {
  Object.freeze(state);

  const successCreate = (data) => {
    dispatch(receiveComment(data))
  }

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.data)
    case RECEIVE_COMMENT:
      let currentSpotComments = state.currentSpotComments.slice().unshift(action.data)

      return merge({}, state, {
        currentSpotComments
      });
    default:
      return state;
  }
}
