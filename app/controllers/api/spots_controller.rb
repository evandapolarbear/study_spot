class Api::SpotsController < ApplicationController
  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all

    @spots = spots.includes(:reviews, :favorite_users)
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
    render :show
  end

  private

 #FIX spot_params
  def spot_params
    params.require(:spot).permit(
      :lat,
      :lng,
      :description,
      :seating,
      :picture_url
    )
  end

  def bounds
    params[:bounds]
  end
end
