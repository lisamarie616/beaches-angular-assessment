class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :beaches
  has_many :images

  has_many :beach_upvotes, dependent: :destroy
  has_many :upvoted_beaches, through: :beach_upvotes, source: :beach
  has_many :beach_downvotes, dependent: :destroy
  has_many :downvoted_beaches, through: :beach_downvotes, source: :beach

  has_many :comment_upvotes, dependent: :destroy
  has_many :upvoted_comments, through: :comment_upvotes, source: :comment
  has_many :comment_downvotes, dependent: :destroy
  has_many :downvoted_comments, through: :comment_downvotes, source: :comment
  

end
