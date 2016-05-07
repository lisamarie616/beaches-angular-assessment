module Api
  module V1
    class ImagesController < ApplicationController

      def index
        beach = set_beach
        images = beach.images
        respond_with images
      end

      def create
        beach = set_beach
        image = beach.images.build(image_params)
        if image.save
          respond_to do |format|
            format.json { render :json => image}
          end
        end
      end

      private
        def image_params
          params.require(:image).permit(:image)
        end

    end
  end
end