class AddBeachIdToBeachImage < ActiveRecord::Migration
  def change
    add_column :images, :beach_id, :integer
  end
end
