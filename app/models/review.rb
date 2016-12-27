class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..5) }
  validates :spot, presence: true
  belongs_to :spot
end
