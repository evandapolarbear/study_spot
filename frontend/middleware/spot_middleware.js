import {hashHistory} from 'react-router';

import { createSpot } from '../util/spot_api_util';

import { CREATE_SPOT } from '../actions/spot_actions';


export default ({getState, dispatch}) => next => action => {

  const successCallback = spot => {
    console.log("success");
    console.log(spot);
  };
  const errorCallback = error => {
    console.log(error);
  };

  switch(action.type) {
    case CREATE_SPOT:
      createSpot(action.data, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};
