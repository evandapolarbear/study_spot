class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(
      user_id: current_user.id,
      spot_id: favorites_params[:spot_id]
    )

    if(@favorite.save)
      render "api/favorites/show", status: 200
    else
      @errors = favorite.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(
      user_id: current_user.id,
      spot_id: favorites_params[:spot_id]
    )

    if(@favorite.destroy)
      render "api/favorites/show", status: 200
    else
      @errors = favorite.errors.full_messages
			render "api/shared/error", status: 422
    end
  end

  private
  def favorites_params
    params.require(:favorite).permit(:spot_id)
  end

end
