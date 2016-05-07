module Api
  module V1
    class BeachDownvotesController < ApplicationController

      def create
        beach = set_beach
        beach.beach_downvotes.build(user: current_user)
        if beach.save
          beach.decrement!(:score)
          render json: beach
        else
          render :json => { :errors => beach.errors.full_messages }, :status => 422
        end
      end

      def destroy
        beach = set_beach
        vote = BeachDownvote.find_by(beach: beach, user: current_user)
        if vote
          beach.increment!(:score)
        end
        respond_with vote.destroy
      end

    end
  end
end