import { CREATE_COMMENT } from '../actions/comment_actions';
import { createComment } from '../util/comment_api_util';
import { appendComment } from '../actions/spot_actions';


export default ({getState, dispatch}) => next => action => {

  const successCreate = (data) => {
    dispatch(appendComment(data))
  }

  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.data, successCreate);
      return next(action);
    default:
      return next(action);
  }
}
