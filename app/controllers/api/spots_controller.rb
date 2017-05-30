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

  def destroy
    Spot.find(params[:id]).destroy

    flash[:success] = "User deleted"

    spots = bounds ? Spot.in_bounds(bounds) : Spot.all
    @spots = spots.includes(:reviews, :favorite_users)

    render :index
  end

  private

 #FIX spot_params
  def spot_params
    params.require(:spot).permit(
      :lat,
      :lng,
      :name,
      :network_name,
      :password,
      :coffee,
      :plugs,
      :bar
    )
  end

  def bounds
    params[:bounds]
  end
end
