module Api
  module V1
    class BeachUpvotesController < ApplicationController

      def create
        beach = Beach.find(params[:id])
        beach.beach_upvotes.build(user: current_user)
        if beach.save
          beach.increment!(:score)
          respond_to do |format|
            format.json { render :json => beach}
          end
        else
          render :json => { :errors => beach.errors.full_messages }, :status => 422
        end
      end

      def destroy
        beach = Beach.find(params[:id])
        vote = BeachUpvote.find_by(beach: beach, user: current_user)
        if vote
          beach.decrement!(:score)
        end
        respond_with vote.destroy
      end


    end
  end
end