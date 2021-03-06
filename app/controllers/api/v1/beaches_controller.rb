module Api
  module V1
    class BeachesController < ApplicationController

      def index
        render json: Beach.ordered
      end

      def show
        beach = set_beach
        render json: beach
      end

      def create
        beach = Beach.new(beach_params)
        if beach.save
          render json: beach
        else
          render :json => { :errors => beach.errors.full_messages }, :status => 422
        end
      end

      def update
        beach = set_beach
        if beach.update(beach_params)
          render json: beach
        else
          render :json => { :errors => beach.errors.full_messages }, :status => 422
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

    end
  end
end