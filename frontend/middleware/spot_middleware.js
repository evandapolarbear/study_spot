import {hashHistory} from 'react-router';

import { createSpot, fetchSpots, deleteSpot } from '../util/spot_api_util';

import { CREATE_SPOT, REQUEST_SPOTS, DELETE_SPOT,  requestSpots, receiveSpots } from '../actions/spot_actions';



export default ({getState, dispatch}) => next => action => {

  const successCreateCallback = () => {
    console.log('success dispatch');
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
    case DELETE_SPOT:
      deleteSpot(action.data, successCreateCallback, errorCallback);
    default:
      return next(action);
  }
};
