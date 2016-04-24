class AddUserIdToBeach < ActiveRecord::Migration
  def change
    add_column :beaches, :user_id, :integer
  end
end
