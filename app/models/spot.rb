class Spot < ActiveRecord::Base
  validates :name, :network_name, :password, :lat, :lng, presence: true


  has_many :comments
  has_many :favorites
  has_many :favorite_users,
    through: :favorites,
    source: :user

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    reviews.average(:rating)
  end
end
