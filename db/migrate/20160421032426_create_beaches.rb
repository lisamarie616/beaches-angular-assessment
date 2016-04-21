class CreateBeaches < ActiveRecord::Migration
  def change
    create_table :beaches do |t|
      t.string :name
      t.text :description
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.float :parking_hourly_cost
      t.float :parking_daily_cost
      t.float :bike_rental_hourly_cost
      t.float :bike_rental_daily_cost
      t.float :chair_rental_hourly_cost
      t.float :chair_rental_daily_cost
      t.float :umbrella_rental_hourly_cost
      t.float :umbrella_rental_daily_cost
      t.boolean :restrooms
      t.boolean :dogs_allowed
      t.boolean :firepits
      t.boolean :food_onsite
      t.boolean :bar_onsite
      t.boolean :shopping_onsite
      t.boolean :pier
      t.boolean :showers
      t.boolean :water_fountains
      t.integer :score, default: 0

      t.timestamps null: false
    end
  end
end
