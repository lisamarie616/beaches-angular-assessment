class CommentSerializer < ActiveModel::Serializer
  attributes :id, :note, :score, :user_id, :beach_id
  has_one :user
end
