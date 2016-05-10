module Api
  module V1
    class VisitsController < ApplicationController

      def create
        beach = set_beach
        beach.visits.build(user: current_user)
        if beach.save
          render json: beach
        else
          render :json => { :errors => beach.errors.full_messages }, :status => 422
        end
      end

      def destroy
        beach = set_beach
        visit = Visit.find_by(beach: beach, user: current_user)
        respond_with visit.destroy
      end

    end
  end
end