module Api
  module V1
    class BeachesController < ApplicationController
      def index
        beaches = Beach.all
        render json: beaches
      end

      def show
        beach = set_beach
        render json: beach
      end

      def create
        beach = Beach.new(beach_params)
        if beach.save
          render json: beach, status: :created
        else
          render json: beach.errors, status: :unprocessable_entity
        end
      end

      def update
        beach = set_beach
        if beach.update(beach_params)
          render json: beach
        else
          render json: beach.errors, status: :unprocessable_entity
        end
      end

      def destroy
        beach = set_beach
        beach.destroy
      end

      private
      def beach_params
        params.require(:beach).permit(:name, :description, :address, :city, :state, :zip, 
        :parking_hourly_cost, :parking_daily_cost, :bike_rental_hourly_cost, 
        :bike_rental_daily_cost, :chair_rental_hourly_cost, :chair_rental_daily_cost, 
        :umbrella_rental_hourly_cost, :umbrella_rental_daily_cost, :restrooms, 
        :dogs_allowed, :firepits, :food_onsite, :bar_onsite, :shopping_onsite, 
        :pier, :showers, :water_fountains, :score)
      end

      def set_beach
        Beach.find(params[:id])
      end
    end
  end
end