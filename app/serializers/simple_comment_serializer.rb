class SimpleCommentSerializer < ActiveModel::Serializer
  attributes :id, :note, :score, :user_id, :beach_id
  has_one :user, serializer: SimpleUserSerializer
end
