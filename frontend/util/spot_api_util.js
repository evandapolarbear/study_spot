export const fetchSpots = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: filters,
    success
  });
};

export const fetchSpot = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/benches/${id}`,
    success
  });
};

export const createReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review,
    success
  });
};

export const createSpot = (spot, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: spot,
    success,
    error
  });
};
