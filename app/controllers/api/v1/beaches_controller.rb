module Api
  module V1
    class BeachesController < ApplicationController

      def index
        respond_with(Beach.all.order("id DESC"))
      end

      def show
        beach = set_beach
        respond_with(beach)
      end

      def create
        beach = Beach.new(beach_params)
        if beach.save
          respond_to do |format|
            format.json { render :json => beach}
          end
        end
      end

      def update
        beach = set_beach
        if beach.update(beach_params)
          respond_to do |format|
            format.json { render :json => beach}
          end
        end
      end

      def destroy
        respond_with(Beach.destroy(params[:id]))
      end

      private
      def beach_params
        params.require(:beach).permit(:name, :description, :address, :city, :state, :zip, 
        :parking_hourly_cost, :parking_daily_cost, :bike_rental_hourly_cost, 
        :bike_rental_daily_cost, :chair_rental_hourly_cost, :chair_rental_daily_cost, 
        :umbrella_rental_hourly_cost, :umbrella_rental_daily_cost, :restrooms, 
        :dogs_allowed, :firepits, :food_onsite, :bar_onsite, :shopping_onsite, 
        :pier, :showers, :water_fountains, :score, :user_id)
      end

      def set_beach
        Beach.find(params[:id])
      end
    end
  end
end