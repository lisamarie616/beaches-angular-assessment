module Api
  module V1
    class UsersController < ApplicationController

      def visited
        beaches = current_user.visited_beaches
        render json: beaches
      end

      def not_visited
        beaches = current_user.not_visited
        render json: beaches
      end

      def show
        user = set_user
        render json: user
      end

      def images
        user = set_user
        images = user.images
        render json: images
      end

      def destroy_images
        image = Image.find(params[:id])
        respond_with image.destroy
      end
      
    end
  end
end