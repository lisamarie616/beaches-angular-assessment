class Comment < ActiveRecord::Base
  belongs_to :beach
  belongs_to :user

  has_many :comment_upvotes, dependent: :destroy
  has_many :upvoted_users, through: :comment_upvotes, source: :user
  has_many :comment_downvotes, dependent: :destroy
  has_many :downvoted_users, through: :comment_downvotes, source: :user

  def as_json(options = {})
    super(options.merge(include: [:user]))
  end
end
