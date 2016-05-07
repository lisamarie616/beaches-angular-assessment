module Api
  module V1
    class CommentsController < ApplicationController

      def index
        beach = set_beach
        comments = beach.comments
        render json: comments
      end

      def show
        comment = set_comment
        render json: comment
      end

      def create
        beach = set_beach
        comment = beach.comments.build(comment_params)
        if comment.save
          render json: comment
        else
          render :json => { :errors => comment.errors.full_messages }, :status => 422
        end
      end

      def update
        comment = set_comment
        if comment.update(comment_params)
          render json: comment
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
        
    end
  end
end