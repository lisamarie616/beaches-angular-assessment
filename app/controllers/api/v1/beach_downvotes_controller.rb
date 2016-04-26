module Api
  module V1
    class BeachDownvotesController < ApplicationController

      def create
        beach = Beach.find(params[:id])
        beach.beach_downvotes.build(user: current_user)
        if beach.save
          beach.decrement!(:score)
          respond_to do |format|
            format.json { render :json => beach}
          end
        else
          respond_with beach.errors
        end
      end

      def destroy
        beach = Beach.find(params[:id])
        vote = BeachDownvote.find_by(beach: beach, user: current_user)
        if vote
          beach.increment!(:score)
        end
        respond_with vote.destroy
      end


    end
  end
end