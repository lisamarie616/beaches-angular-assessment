module Api
  module V1
    class CommentUpvotesController < ApplicationController

      def create
        comment = Comment.find(params[:id])
        comment.comment_upvotes.build(user: current_user)
        if comment.save
          comment.increment!(:score)
          respond_to do |format|
            format.json { render :json => comment}
          end
        else
          render :json => { :errors => comment.errors.full_messages }, :status => 422
        end
      end

      def destroy
        comment = Comment.find(params[:id])
        vote = CommentUpvote.find_by(comment: comment, user: current_user)
        if vote
          comment.decrement!(:score)
        end
        respond_with vote.destroy
      end


    end
  end
end