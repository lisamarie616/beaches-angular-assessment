class CommentSerializer < ActiveModel::Serializer
  attributes :id, :note, :score
end
