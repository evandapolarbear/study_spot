// export const fetchSpots = (filters, success, error) => {
//   $.ajax({
//     method: 'GET',
//     url: 'api/spots',
//     data: filters,
//     success
//   });
// };

export const fetchSpots = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    success,
    error
  });
};

export const fetchSpot = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/spots/${id}`,
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
