class CommentDownvote < ActiveRecord::Base
  belongs_to :comment
  belongs_to :user

  validates :comment_id, uniqueness: { scope: :user_id }
end
