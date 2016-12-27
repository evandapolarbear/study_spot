class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in, only: [:create]

  def create
    review = Review.new(review_params)

    if review.save
      @spot = review.spot
      render '/api/spotes/show'
    else
      render json: review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :spot_id)
  end
end
