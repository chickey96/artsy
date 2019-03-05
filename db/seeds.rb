# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    require 'open-uri'

    User.destroy_all
    Product.destroy_all 

    user1 = User.create(
    email: "zglass@salinger.com", 
    username: "Zooey", 
    password: "whentheFatLadysings" 
    )

    user2 = User.create(
    email: "moirachase@gmail.com", 
    username: "moira", 
    password: "theflowerqueen" 
    )

    user3 = User.create(
    email: "cmh@gmail.com",
    username: "wryn", 
    password: "soitgoes..." 
    )

    prod1 = Product.create(
        title: "Lion",
        artist_id: user3.id,
        price: 20.00,
        media_type: "drawing: pastel"
    )
    file1 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/lion.jpg')
    prod1.photo.attach(io: file1, filename: 'file1')
    prod1.save!

    prod2 = Product.create(
        title: "Awakening Thought",
        artist_id: user3.id,
        price: 20.00,
        media_type: "drawing: charcoal, pastel"
    )
    file2 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/awakening_thought.jpg')
    prod2.photo.attach(io: file2, filename: 'file2')
    prod2.save!

    prod3 = Product.create(
        title: "1994 Plymouth Acclaim",
        artist_id: user3.id,
        price: 10.00,
        media_type: "drawing: charcoal"
    )
    file3 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/1994_plymouth_acclaim.jpg')
    prod3.photo.attach(io: file3, filename: 'file3')
    prod3.save!

    prod4 = Product.create(
        title: "The Fury!",
        artist_id: user3.id,
        price: 10.00,
        media_type: "drawing: felt-pen, colored pencil"
    )
    file4 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/the_fury.jpg')
    prod4.photo.attach(io: file4, filename: 'file4')
    prod4.save!

    prod5 = Product.create(
        title: "The Wail!",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing: charcoal"
    )
    file5 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/the_wail.jpg')
    prod5.photo.attach(io: file5, filename: 'file5')
    prod5.save!

    prod6 = Product.create(
        title: "Seattle meets CA",
        artist_id: user3.id,
        price: 15.00,
        media_type: "3d/mixed-media: vinyl, acrylic"
    )
    file6 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/seattle_meets_ca.jpg')
    prod6.photo.attach(io: file6, filename: 'file6')
    prod6.save!

    prod7 = Product.create(
        title: "Still, life?",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing: pastel"
    )
    file7 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/still_life.jpg')
    prod7.photo.attach(io: file7, filename: 'file7')
    prod7.save!

    prod8 = Product.create(
        title: "You are not here",
        artist_id: user3.id,
        price: 10.00,
        media_type: "mixed-media: charcoal, acrylic"
    )
    file8 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/you_are_not_here.jpg')
    prod8.photo.attach(io: file8, filename: 'file8')
    prod8.save!

    prod9 = Product.create(
        title: "Idea, anyone?",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing: charcoal, pastel"
    )
    file9 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/idea_anyone.jpg')
    prod9.photo.attach(io: file9, filename: 'file9')
    prod9.save!

    prod10 = Product.create(
        title: "100% monochromatic",
        artist_id: user3.id,
        price: 10.00,
        media_type: "painting: acrylic"
    )
    file10 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/100%25_monochromatic.jpg')
    prod10.photo.attach(io: file10, filename: 'file10')
    prod10.save!

    prod11 = Product.create(
        title: "Rohith Gopal",
        artist_id: user3.id,
        price: 50.00,
        media_type: "drawing: pencil"
    )
    file11 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/rohith_gopal.jpg')
    prod11.photo.attach(io: file11, filename: 'file11')
    prod11.save!

    prod12 = Product.create(
        title: "On Point",
        artist_id: user3.id,
        price: 5.00,
        media_type: "painting: acrylic"
    )
    file12 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/on_point.jpg')
    prod12.photo.attach(io: file12, filename: 'file12')
    prod12.save!

    prod13 = Product.create(
        title: "Swan Lake",
        artist_id: user3.id,
        price: 15.00,
        media_type: "mixed-media: music sheet collage, acrylic, oil"
    )
    file13 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/swan_lake.jpg')
    prod13.photo.attach(io: file13, filename: 'file13')
    prod13.save!

    prod14 = Product.create(
        title: "BANG!",
        artist_id: user3.id,
        price: 15.00,
        media_type: "mixed-media: magazine collage, acrylic"
    )
    file14 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/bang.jpg')
    prod14.photo.attach(io: file14, filename: 'file14')
    prod14.save!

    prod15 = Product.create(
        title: "Self Care",
        artist_id: user3.id,
        price: 20.00,
        media_type: "mixed-media: Jackie Robinson book collage, acrylic, charcoal"
    )
    file15 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/self_care.jpg')
    prod15.photo.attach(io: file15, filename: 'file15')
    prod15.save!

    prod16 = Product.create(
        title: "This is my Grandpa's Dog",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing: charcoal"
    )
    file16 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/this_is_my_grandpas_dog.jpg')
    prod16.photo.attach(io: file16, filename: 'file16')
    prod16.save!

    prod17 = Product.create(
        title: "Car in A minor (swirl)",
        artist_id: user3.id,
        price: 10.00,
        media_type: "drawing: charcoal, acrylic"
    )
    file17 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/car_in_a_minor_swirl.jpg')
    prod17.photo.attach(io: file17, filename: 'file17')
    prod17.save!

    prod18 = Product.create(
        title: "In the Desert...",
        artist_id: user3.id,
        price: 15.00,
        media_type: "drawing: pencil, charcoal, colored-pencil, pastel"
    )
    file18 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/in_the_desert.jpg')
    prod18.photo.attach(io: file18, filename: 'file18')
    prod18.save!

    prod19 = Product.create(
        title: "Lucy",
        artist_id: user3.id,
        price: 15.00,
        media_type: "painting: acrylic (over failed pastel)"
    )
    file19 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/lucy.jpg')
    prod19.photo.attach(io: file19, filename: 'file19')
    prod19.save!

    prod20 = Product.create(
        title: "Goin Steady",
        artist_id: user3.id,
        price: 10.00,
        media_type: "drawing: pencil, pastel"
    )
    file20 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/goin_steady.jpg')
    prod20.photo.attach(io: file20, filename: 'file20')
    prod20.save!

    prod21 = Product.create(
        title: "Just Relax",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing: charcoal, pastel"
    )
    file21 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/just_relax.jpg')
    prod21.photo.attach(io: file21, filename: 'file21')
    prod21.save!

    prod22 = Product.create(
        title: "Strange Fruit",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing: charcoal, pastel"
    )
    file22 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/strange_fruit.jpg')
    prod22.photo.attach(io: file22, filename: 'file22')
    prod22.save!

    prod23 = Product.create(
        title: "One of those days",
        artist_id: user3.id,
        price: 3.00,
        media_type: "mixed-media: charcoal, acrylic"
    )
    file23 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/one_of_those_days.jpg')
    prod23.photo.attach(io: file23, filename: 'file23')
    prod23.save!

    prod24 = Product.create(
        title: "more still, life?",
        artist_id: user3.id,
        price: 3.00,
        media_type: "drawing: charcoal"
    )
    file24 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/more_still_life.jpg')
    prod24.photo.attach(io: file24, filename: 'file24')
    prod24.save!

    prod25 = Product.create(
        title: "posted up",
        artist_id: user3.id,
        price: 7.00,
        media_type: "drawing: charcoal, pastel"
    )
    file25 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/posted_up.jpg')
    prod25.photo.attach(io: file25, filename: 'file25')
    prod25.save!

    prod26 = Product.create(
        title: "me drawing you drawing me",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing: pencil, colored-pencil"
    )
    file26 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/me_drawing_you_drawing_me.jpg')
    prod26.photo.attach(io: file26, filename: 'file26')
    prod26.save!

    prod27 = Product.create(
        title: "B#",
        artist_id: user3.id,
        price: 7.00,
        media_type: "drawing: pencil, colored-pencil"
    )
    file27 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/b%23.jpg')
    prod27.photo.attach(io: file27, filename: 'file27')
    prod27.save!

    prod28 = Product.create(
        title: "SOS",
        artist_id: user3.id,
        price: 7.00,
        media_type: "drawing: charcoal, pastel"
    )
    file28 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/sos.jpg')
    prod28.photo.attach(io: file28, filename: 'file28')
    prod28.save!

    prod29 = Product.create(
        title: "frank",
        artist_id: user3.id,
        price: 15.00,
        media_type: "drawing: charcoal"
    )
    file29 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/frank.jpg')
    prod29.photo.attach(io: file29, filename: 'file29')
    prod29.save!
