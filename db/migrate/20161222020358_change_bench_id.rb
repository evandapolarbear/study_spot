class ChangeBenchId < ActiveRecord::Migration
  def change
    rename_column :favorites, :bench_id, :spot_id
    rename_column :reviews, :bench_id, :spot_id
  end
end
