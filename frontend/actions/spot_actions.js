
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const REQUEST_SPOTS = "REQUEST_SPOTS";
export const REQUEST_SPOT = "REQUEST_SPOT";
export const CREATE_SPOT = "CREATE_SPOT";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const SET_CURRENT_SPOT = "SET_CURRENT_SPOT";

export const requestSpots = () => ({
  type: REQUEST_SPOTS
});

export const requestSpot = id => ({
  type: REQUEST_SPOT,
  id
});

export const receiveSpots = data => ({
  type: RECEIVE_SPOTS,
  data
});

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const receiveSpot = data => ({
  type: RECEIVE_SPOT,
  data
});

export const setCurrentSpot = data => ({
  type: SET_CURRENT_SPOT,
  data
});

export const createSpot = data => ({
  type: CREATE_SPOT,
  data
});
