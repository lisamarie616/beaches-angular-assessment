class CreateBeachDownvotes < ActiveRecord::Migration
  def change
    create_table :beach_downvotes do |t|
      t.integer :beach_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
