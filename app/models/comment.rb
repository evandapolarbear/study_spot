class Comment < ActiveRecord::Base
  validates :user_id, :spot_id, :body, presence: true
  validates :body, length: {minimum: 4}

  belongs_to :spot, :user
end
