class Beach < ActiveRecord::Base
  has_many :comments, dependent: :destroy
  belongs_to :user
  
  has_many :beach_upvotes, dependent: :destroy
  has_many :upvoted_users, through: :beach_upvotes, source: :user
  has_many :beach_downvotes, dependent: :destroy
  has_many :downvoted_users, through: :beach_downvotes, source: :user

  def as_json(options = {})
    super(options.merge(include: [:comments]))
  end
end
