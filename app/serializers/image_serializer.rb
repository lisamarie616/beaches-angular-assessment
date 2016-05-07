class ImageSerializer < ActiveModel::Serializer
  attributes :id, :beach_id, :user_id, :thumb, :img
  has_one :beach, serializer: SimpleBeachSerializer

  def thumb
    return object.image.url(:thumb)
  end

  def img
    return object.image.url(:large)
  end

end
