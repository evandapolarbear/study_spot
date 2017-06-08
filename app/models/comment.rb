class Comment < ActiveRecord::Base
  validates :user_id, :spot_id, :body, presence: true

  belongs_to :spot


end
