import { fetchSpots } from './spot_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export function updateFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchSpots(getState().filters)(dispatch);
  };
}

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
