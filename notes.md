* Models and Relationships
User (use Devise)
  username
  email
  password
  has_many :comments

Beach
  name
  description
  address
  city
  state
  zip code (integer)
  parking hourly cost (float)
  parking daily cost (float)
  bike rental hourly cost (float)
  bike rental daily cost (float)
  chair rental hourly cost (float)
  chair rental daily cost (float)
  umbrella rental hourly cost (float)
  umbrella rental daily cost (float)
  restrooms (boolean)
  dogs allowed (boolean)
  firepits (boolean)
  food onsite (boolean)
  bar onsite (boolean)
  shopping onsite (boolean)
  pier (boolean)
  showers (boolean)
  water fountains (boolean)
  score (integer, default 0)
  has_many :comments

Comment
  note
  score (integer, default 0)
  user id (integer)
  beach id (integer)
  belongs_to :user
  belongs_to :beach

x Create models and migrations
x Setup routes and controller for beaches
x add beach adn comment serializers
x add seed data

* add user model via devise
* setup routes and controller for comments