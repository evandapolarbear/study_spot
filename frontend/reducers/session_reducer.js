import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  console.log(action.type);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });

    case LOGOUT:
      return merge({}, _nullUser);

    case RECEIVE_ERRORS:
      console.log(action.errors);
      const errors = action.errors;
      return merge({}, state, {
        errors
      });

    default:
      return state;
  }
};

export default SessionReducer;
