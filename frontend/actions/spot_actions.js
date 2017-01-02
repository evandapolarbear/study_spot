
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const REQUEST_SPOTS = "REQUEST_SPOTS";
export const REQUEST_SPOT = "REQUEST_SPOT";
export const CREATE_SPOT = "CREATE_SPOT";
export const CREATE_REVIEW = "CREATE_REVIEW";

export const requestSpots = () => ({
  type: REQUEST_SPOTS
});

export const requestSpot = id => ({
  type: REQUEST_SPOT,
  id
});

export const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
});

export const createSpot = spot => ({
  type: CREATE_SPOT,
  spot
});
