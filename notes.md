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
x add edit and update route, controller, and template for beach
x remove serializers and use respond_with in api controller instead
x add delete button to beach show page and delete function to BeachController
x edit addBeach method in NewBeachController to associate current user with created beach
x restrict destroy action to user who created beach
x add comment field on beach show page, comment associates with current user
x add commentor usernames on beach show page

* show username next to comments on beach index page
* only allow user who created the comment to edit or destroy it
* add functionality to edit and delete comments
* add messages throughout
* add edit and delete buttons to beach index page?
* add validation to limit comment note attribute to 140 characters
* refactor Auth currentUser method (as a service?)
* need an add comment button on beach show page (at top of comments), on click show field to add comment
* implement upvote and downvote functionality for comments on beach show page and beach index page and for beaches on index page
* add filters
* add omniauth?
* need better implementation of flash messages (ex: hitting login multiple times keeps adding error messages)
* add background image
* add field on beach index page to add comment (at top of comments)
* update controllers and config/routes.rb to only include needed routes

