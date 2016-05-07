module Api
  module V1
    class UsersController < ApplicationController

      def show
        user = set_user
        respond_with(user)
      end

      def images
        user = set_user
        images = user.images
        respond_with images
      end

      def destroy_images
        image = Image.find(params[:id])
        respond_with image.destroy
      end
      
    end
  end
end