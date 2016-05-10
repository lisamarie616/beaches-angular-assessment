class Visit < ActiveRecord::Base
  belongs_to :beach
  belongs_to :user

  validates :beach_id, uniqueness: { scope: :user_id }
end
