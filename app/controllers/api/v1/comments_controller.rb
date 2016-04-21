module Api
  module V1
    class CommentsController < ApplicationController
      def index
        beach = Beach.find(params[:beach_id])
        comments = beach.comments
        render json: comments
      end

      def show
        comment = set_comment
        render json: comment
      end

      def create
        beach = Beach.find(params[:beach_id])
        comment = beach.comments.build(beach_params)
        if comment.save
          render json: comment
        end
      end

      def update
        comment = set_comment
        if comment.update(comment_params)
          render json: comment
        end
      end

      def destroy
        comment = set_comment
        comment.destroy
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