module Api
  module V1
    class CommentDownvotesController < ApplicationController

      def create
        comment = Comment.find(params[:id])
        comment.comment_downvotes.build(user: current_user)
        if comment.save
          comment.decrement!(:score)
          respond_to do |format|
            format.json { render :json => comment}
          end
        else
          render :json => { :errors => comment.errors.full_messages }, :status => 422
        end
      end

      def destroy
        comment = Comment.find(params[:id])
        vote = CommentDownvote.find_by(comment: comment, user: current_user)
        if vote
          comment.increment!(:score)
        end
        respond_with vote.destroy
      end


    end
  end
end