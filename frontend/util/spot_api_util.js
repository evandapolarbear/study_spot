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

export const createSpot = (spot, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: spot,
    success,
    error
  });
};

export const deleteSpot = (spotId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/spots/${spotId}`,
    success,
    error
  });
};
