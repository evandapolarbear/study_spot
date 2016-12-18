class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.integer :lat, null: false
      t.integer :lng, null: false
      t.integer :api_id, null: false
      t.string :name, null: false
      t.string :network_name, null: false
      t.string :password
      t.boolean :coffee, null: false
      t.boolean :alcohol, null: false

      t.timestamps
    end
    add_index :spots, :api_id, unique: true
  end
end
