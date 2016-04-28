class Beach < ActiveRecord::Base
  has_many :comments, dependent: :destroy
  belongs_to :user
  
  has_many :beach_upvotes, dependent: :destroy
  has_many :upvoted_users, through: :beach_upvotes, source: :user
  has_many :beach_downvotes, dependent: :destroy
  has_many :downvoted_users, through: :beach_downvotes, source: :user

  validates :name, uniqueness: { case_sensitive: false, scope: [:city, :state] }
  validates :city, presence: true
  validates :state, length: { is: 2 }
  validates :parking_hourly_cost, :parking_daily_cost, :bike_rental_hourly_cost, 
            :bike_rental_daily_cost, :chair_rental_hourly_cost, :chair_rental_daily_cost, 
            :umbrella_rental_hourly_cost, :umbrella_rental_daily_cost, numericality: { greater_than_or_equal_to: 0 }, allow_nil: true

  def as_json(options = {})
    super(options.merge(include: [:comments]))
  end
end