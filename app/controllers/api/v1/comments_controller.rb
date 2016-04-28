module Api
  module V1
    class CommentsController < ApplicationController

      def index
        beach = Beach.find(params[:beach_id])
        comments = beach.comments
        respond_with comments
      end

      def show
        comment = set_comment
        respond_with comment
      end

      def create
        beach = Beach.find(params[:beach_id])
        comment = beach.comments.build(comment_params)
        if comment.save
          respond_to do |format|
            format.json { render :json => comment}
          end
        else
          render :json => { :errors => comment.errors.full_messages }, :status => 422
        end
      end

      def update
        comment = set_comment
        if comment.update(comment_params)
          respond_with comment
        else
          render :json => { :errors => comment.errors.full_messages }, :status => 422
        end
      end

      def destroy
        comment = set_comment
        respond_with comment.destroy
      end

      private
      def comment_params
        params.require(:comment).permit(:note, :score, :user_id, :beach_id)
      end

      def set_comment
        Comment.find(params[:id])
      end
    end
  end
end