class ChangeSpot < ActiveRecord::Migration
  def change
    rename_column :benches, :description, :name
    add_column :benches, :network_name, :string, null: false
    add_column :benches, :password, :string, default: nil
    add_column :benches, :coffee, :boolean, null: false
    add_column :benches, :plugs, :boolean, null: false
    add_column :benches, :bar, :string, default: nil
    remove_column :benches, :seating
    remove_column :benches, :picture_url
    rename_table :benches, :locations
  end
end
