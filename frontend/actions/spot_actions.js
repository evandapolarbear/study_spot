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

export const receiveSpots = benches => ({
  type: RECEIVE_SPOTS,
  benches
});

export const receiveSpot = bench => ({
  type: RECEIVE_SPOT,
  bench
});

export const createSpot = bench => ({
  type: CREATE_SPOT,
  bench
});

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});
