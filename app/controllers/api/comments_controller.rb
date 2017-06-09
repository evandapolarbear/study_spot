class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment, status: :unprocessable_entity
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:user_id, :spot_id, :body)
  end
end
