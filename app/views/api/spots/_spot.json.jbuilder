json.extract! spot, :id, :name, :lat, :lng, :name, :network_name, :password, :coffee, :bar, :plugs

json.favorite_users spot.favorite_users.map(&:id)

json.reviews do
  json.partial! 'api/reviews/review', collection: spot.reviews, as: :review
end
