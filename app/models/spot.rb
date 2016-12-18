class Spot < ApplicationRecord
  validates :name, :lat, :lng, :api_id, :network_name, :password, :coffee, :alchohol, presence: true
end
