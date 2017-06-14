import { RECEIVE_SPOTS,
         RECEIVE_SPOT, SET_CURRENT_SPOT, APPEND_COMMENT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const _default = Object.freeze({
  spots: [],
  currentSpot: null
});

const SpotReducer = (state = _default, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      const spots = action.data;
      return merge({}, state,
        { spots }
      );
    case RECEIVE_SPOT:
      const currentSpot = action.data;
      return merge({}, state, { currentSpot });
    case SET_CURRENT_SPOT:
      return merge({}, state, {currentSpot: action.data});
    case APPEND_COMMENT:
      let currentComments = state.currentSpot.comments.slice();

      currentComments.unshift(action.comment);

      let newCurrentSpot = merge({},
                              state.currentSpot,
                              {comments: currentComments})

      return merge({}, state, {currentSpot: newCurrentSpot})
    default:
      return state;
  }
};

export default SpotReducer;
