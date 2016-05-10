class BeachSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :city, :state, :zip, 
    :parking_hourly_cost, :parking_daily_cost, :bike_rental_hourly_cost, 
    :bike_rental_daily_cost, :chair_rental_hourly_cost, :chair_rental_daily_cost, 
    :umbrella_rental_hourly_cost, :umbrella_rental_daily_cost, :restrooms, 
    :dogs_allowed, :firepits, :food_onsite, :bar_onsite, :shopping_onsite, 
    :pier, :showers, :water_fountains, :score, :user_id

    has_many :comments, serializer: SimpleCommentSerializer
    has_many :visitors
end
