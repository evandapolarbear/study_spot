class ChangeSpots < ActiveRecord::Migration
  def change
    drop_table :spots
    rename_table :locations, :spots
  end
end
