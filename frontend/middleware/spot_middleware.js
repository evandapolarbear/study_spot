import {hashHistory} from 'react-router';

import { createSpot, fetchSpots } from '../util/spot_api_util';

import { CREATE_SPOT, REQUEST_SPOTS, requestSpots, receiveSpots } from '../actions/spot_actions';



export default ({getState, dispatch}) => next => action => {

  const successCreateCallback = spot => {
    dispatch(requestSpots());
  };

  const successRequestSpots = spots => {
    dispatch(receiveSpots(spots));
  };

  const errorCallback = error => {
    console.log(error.statusText);
  };

  switch(action.type) {
    case CREATE_SPOT:
      createSpot(action.data, successCreateCallback, errorCallback);
      return next(action);
    case REQUEST_SPOTS:
      fetchSpots(successRequestSpots, errorCallback);
    default:
      return next(action);
  }
};
