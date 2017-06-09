json.extract! spot, :id, :name, :lat, :lng, :name, :network_name, :password, :coffee, :bar, :plugs


# NOTE: all of thus usedto drop all favorited peeps and reviews
json.favorite_users spot.favorite_users.map(&:id)

json.comments do
  json.partial! 'api/comments/comment', collection: spot.comments, as: :comment
end
