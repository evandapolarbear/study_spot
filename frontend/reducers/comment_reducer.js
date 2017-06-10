import { CREATE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions'
import { createComment } from '../util/comment_api_util'


import merge from 'lodash/merge';

const _nullComments = {
  currentSpotComments: [],
  errors: []
}

const CommentReducer = (state = _nullComments, action) => {
  Object.freeze(state);

  const successCreate = (data) => {
    console.log("success data -> ");
    console.log(data);
    dispatch(receiveComment(data))
  }

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.data, successCreate)
    case RECEIVE_COMMENT:
      let currentSpotComments = state.currentSpotComments.slice().unshift(action.data)

      console.log("recieve action data =>");
      console.log( currentSpotComments );

      let newState = merge({}, state, {
        currentSpotComments
      });

      console.log('new state ~>');
      console.log(newState);


      return merge({}, state, {
        currentSpotComments
      });
    default:
      return state;
  }
}

export default CommentReducer;
