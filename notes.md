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
x add beach and comment serializers
x add seed data
x finish beaches controller
x add user model via devise
x add comments controller, add devise and bootstrap to angular app, edits to beaches controller
x add navigation bar with links for sign in, sign up, sign out
x add flash messages
x add index route, controller, and template
x add show route, controller, and template
x add comments to show page
x add comments to beach index page
x add new and create route, controller, and template for beach

* update action for beaches
* edit action for beaches
* destroy action for beaches
* add field on beach index page to add comment (at top of comments)
* add validation to limit comment note attribute to 140 characters
* need an add comment button on beach show page (at top of comments), on click show field to add comment
* implement upvote and downvote functionality for comments on beach show page and beach index page and for beaches on index page
* add omniauth?
* need better implementation of flash messages (ex: hitting login multiple times keeps adding error messages)
* add background image


