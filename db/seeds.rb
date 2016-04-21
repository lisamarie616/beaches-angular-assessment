# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Beach.create(name: "Zuma Beach", description: "The best beach in LA County, wide open clean sand, mild waves, plentiful parking, life-guards, food stands and bathrooms.  Swim in the summer, watch wildlife in the winter, or swim too if you're hardy. Eat hotdogs and build sand castles.  Have a great day at the beach at Zuma Beach! Sand Surf and Fun!", 
  address: "30000 Pacific Coast Hwy", city: "Malibu", state: "CA", zip: 90265, 
  restrooms: true, dogs_allowed: false, firepits: false, food_onsite: true, shopping_onsite: false, 
  pier: false)

Beach.create(name: "La Jolla Shores", description: "A wide, mile-long beach with soft sand, clean water and gentle waves, La Jolla Shores is an ideal spot for families, sunbathers and beginner surfers.", 
  address: "8302 Camino Del Oro", city: "La Jolla", state: "CA", zip: 92037, dogs_allowed: false, 
  firepits: false, shopping_onsite: false)

Comment.create(note: "Love this beach!" , user_id: 1, beach_id: 1)
Comment.create(note: "Free parking on PCH" , user_id: 1, beach_id: 1)
Comment.create(note: "Great place to watch the sunset" , user_id: 1, beach_id: 1)
Comment.create(note: "Not overly crowded" , user_id: 1, beach_id: 1)
Comment.create(note: "Absolutely beautiful!" , user_id: 1, beach_id: 2)
Comment.create(note: "Large parking lot, free during off season" , user_id: 1, beach_id: 2)