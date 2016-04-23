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

Beach.create(name: "Malibu Beach", description: "beautiful surfer beach", address: '123 PCH', city: 'Malibu', state: 'CA', zip: '90000', 
  parking_hourly_cost: 3, parking_daily_cost: 10, bike_rental_hourly_cost: 12, 
  bike_rental_daily_cost: 40, chair_rental_hourly_cost: 2, chair_rental_daily_cost: 10, 
  umbrella_rental_hourly_cost: 2, umbrella_rental_daily_cost: 10, restrooms: true, 
  dogs_allowed: false, firepits: false, food_onsite: false, bar_onsite: false, shopping_onsite: false, 
  pier: true, showers: true, water_fountains: true)

Comment.create(note: "Love this beach!" , user_id: 1, beach_id: 1)
Comment.create(note: "Free parking on PCH" , user_id: 1, beach_id: 1)
Comment.create(note: "Great place to watch the sunset" , user_id: 1, beach_id: 1)
Comment.create(note: "Not overly crowded" , user_id: 1, beach_id: 1)
Comment.create(note: "Absolutely beautiful!" , user_id: 1, beach_id: 2)
Comment.create(note: "Large parking lot, free during off season" , user_id: 1, beach_id: 2)
Comment.create(note: "Lorem ipsum Blue Heaven swim kayak Whitehead Street hurricane snuba shrimp" , user_id: 1, beach_id: 1)
Comment.create(note: "cuban mix sunset banana trees Truman Annex margarita harbor dolphin watersports bicycle western dry rocks dry tortugas" , user_id: 1, beach_id: 1)
Comment.create(note: "Ernest Hemingway cigar gulf of mexico key deer bone cay sand key eastern dry rocks and Tennessee Williams Sloppy Joe's bight stern star fish" , user_id: 1, beach_id: 1)
Comment.create(note: "turtle rest beach stock island navy smathers beach custom house mallory square" , user_id: 1, beach_id: 1)
Comment.create(note: "tank island bahama village boat Matthew C. Perry parrot heads lighthouse reef christmas tree island" , user_id: 1, beach_id: 1)
Comment.create(note: "old town chickens snorkel little white house mile zero cleat sharks" , user_id: 1, beach_id: 1)
Comment.create(note: "palm tree sunset" , user_id: 1, beach_id: 1)
Comment.create(note: "celebration tank island coconut trees sunset key treasure art hammock Green Parrot" , user_id: 1, beach_id: 1)
Comment.create(note: "conch republic yellow tail sun roosters sub-tropical east martillo Thomas Edison fantasy fest." , user_id: 1, beach_id: 1)
Comment.create(note: "oat sun tan Thomas Edison tank island dry tortugas Fort Zachary tank island reef sailing cuban mix mosquitos Over-Sea Railroad lobster" , user_id: 1, beach_id: 1)
Comment.create(note: "Dry Rocks beach buoy western union schooner Jimmy Buffet Duval street cuban chug beer eagle fantasy fest sharks dry tortugas" , user_id: 1, beach_id: 1)
Comment.create(note: "yellow tail mosquitos wisteria island" , user_id: 1, beach_id: 1)
Comment.create(note: "and Tennessee Williams Blue Heaven lobster starboard dolphin homeless ocean sunset key Over-Seas Highway palm tree" , user_id: 1, beach_id: 1)
Comment.create(note: "golf key deer web design island" , user_id: 1, beach_id: 1)
Comment.create(note: "island music sand mosquitos chickens smathers beach" , user_id: 1, beach_id: 1)
Comment.create(note: "Green Parrot civil war dry tortugas cigar cleat port lobster reef conch" , user_id: 1, beach_id: 1)