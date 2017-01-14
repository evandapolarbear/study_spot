import { LOGIN, LOGOUT, SIGNUP, receiveCurrentUser, receiveErrors} from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {

  const successLoginCb = user => {
    dispatch(receiveCurrentUser(user));
  };

  const successLogoutCb = () => {
    console.log('success logout fix');
  };

  const errorCb = error => {
    dispatch(receiveErrors(error));
    console.log(error.statusText);
  };


  switch(action.type) {
    case LOGIN:
      login(action.user, successLoginCb, errorCb);
      return next(action);
    case SIGNUP:
      signup(action.user, successLoginCb, errorCb);
      return next(action);
    case LOGOUT:
      logout(successLogoutCb, errorCb);
      return next(action);
    default:
      return next(action);
  }
};
