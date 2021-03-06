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
x add commentor usernames on beach index page using directive, refactor beach show page to use same directive
x add functionality delete comments and only allow user who created the comment to destroy it
x implement upvote and downvote for beaches on beach index page
x implement upvote and downvote for comments
x order beaches and comments by votes
x add basic filters
x add filters for amenities
x add basic validations on front-end for beaches and comments
x add validation to limit comment note attribute to 140 characters
x add validations to require certain fields when creating a beach (name, city, state)
x add activerecord model validations
x add flash messages throughout
x restrict actions for unauthenticated users
x restrict routes for unauthenticated users
x clean up styles on beach index page
x clean up styles on beach show page
x add something to home page
x factor out upvote/downvote functions from BeachesController into a service and from comments directive controller
x refactor angular controllers
x add functionality to allow users to upload multiple photos to beaches
x add page for user to view uploaded images and delete them

1. Beaches should have multiple picture uploads.
2. A user should be able to say "They've been there."
3. Show a user a map that plots beaches theyve been at and one that shows them the beaches they haven't been at.