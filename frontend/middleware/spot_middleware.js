import {hashHistory} from 'react-router';

import { CREATE_SPOT } from '../actions/spot_actions';

import{ login, signup, logout, guestLogin } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {

  const successCallback = artist => {
    dispatch(receiveCurrentArtist(artist));
    hashHistory.push("profile");
  };
  const errorCallback = error => dispatch(receiveErrors(error.responseJSON));

  switch(action.type) {
    case CREATE_SPOT:
      login(action.artist, successCallback, errorCallback);
      return next(action);
    case GUEST_LOGIN:
      guestLogin(successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.artist, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
