class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.create!(comment_params)
  end


  private
  def comment_params
    params.require(:comment).permit(:user_id, :spot_id, :body)
  end
end
