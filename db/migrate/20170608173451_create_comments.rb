class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.text :body
      t.references :Spot

      t.timestamps null: false
    end

    drop_table :reviews
  end
end
