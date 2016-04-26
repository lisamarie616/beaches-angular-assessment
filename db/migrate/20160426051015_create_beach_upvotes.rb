class CreateBeachUpvotes < ActiveRecord::Migration
  def change
    create_table :beach_upvotes do |t|
      t.integer :beach_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
