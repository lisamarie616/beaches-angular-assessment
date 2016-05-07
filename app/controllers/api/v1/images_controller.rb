module Api
  module V1
    class ImagesController < ApplicationController

      def index
        beach = set_beach
        images = beach.images
        render json: images
      end

      def create
        beach = set_beach
        image = beach.images.build(image_params)
        if image.save
          render json: image
        end
      end

      private
        def image_params
          params.require(:image).permit(:image, :user_id)
        end

    end
  end
end