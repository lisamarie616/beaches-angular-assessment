module Api
  module V1
    class UsersController < ApplicationController

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