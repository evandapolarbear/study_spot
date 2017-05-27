import { RECEIVE_SPOTS,
         RECEIVE_SPOT, SET_CURRENT_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const _default = Object.freeze({
  spots: [],
  currentSpot: null
});

const SessionReducer = (state = _default, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      const spots = action.data;
      return merge({}, state,
        {spots}
      );
    case RECEIVE_SPOT:
      const currentSpot = action.data;
      return merge({}, state, { currentSpot });
    case SET_CURRENT_SPOT:
      console.log(action.data);
      return merge({}, state, {currentSpot: action.data});
    default:
      return state;
  }
};

export default SessionReducer;
