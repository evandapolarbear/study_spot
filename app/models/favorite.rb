class Favorite < ActiveRecord::Base
	validates :user_id, uniqueness: {scope: :spot_id}

	belongs_to :spot
	belongs_to :user

end
