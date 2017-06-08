class EditCommentSpotId < ActiveRecord::Migration
  def change
    rename_column :comments, :Spot_id, :spot_id
  end
end
