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
    username: "Moira Chase", 
    password: "theflowerqueen" 
    )

    user3 = User.create(
    email: "cmh@gmail.com",
    username: "wryn", 
    password: "soitgoes..." 
    )

    prod1 = Product.create(
        title: "A Lion",
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
        media_type: "drawing/mixed-media: charcoal, pastel, ink"
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
        media_type: "drawing/mixed-media: felt-pen, colored pencil"
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
        media_type: "mixed-media/painting: vinyl, acrylic"
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
        media_type: "mixed-media/painting/drawing: charcoal, acrylic"
    )
    file8 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/you_are_not_here.jpg')
    prod8.photo.attach(io: file8, filename: 'file8')
    prod8.save!

    prod9 = Product.create(
        title: "Idea, anyone?",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing/mixed-media: charcoal, pastel"
    )
    file9 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/idea_anyone.jpg')
    prod9.photo.attach(io: file9, filename: 'file9')
    prod9.save!

    prod10 = Product.create(
        title: "100% monochromatic",
        artist_id: user3.id,
        price: 10.00,
        media_type: "painting/mixed-media: acrylic, ink"
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
        media_type: "mixed-media/painting: sheet music collage, acrylic, oil"
    )
    file13 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/swan_lake.jpg')
    prod13.photo.attach(io: file13, filename: 'file13')
    prod13.save!

    prod14 = Product.create(
        title: "BANG!",
        artist_id: user3.id,
        price: 15.00,
        media_type: "mixed-media/painting: magazine collage, acrylic"
    )
    file14 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/bang.jpg')
    prod14.photo.attach(io: file14, filename: 'file14')
    prod14.save!

    prod15 = Product.create(
        title: "Self Care",
        artist_id: user3.id,
        price: 20.00,
        media_type: "mixed-media/painting/drawing: Jackie Robinson book collage, acrylic, charcoal"
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
        media_type: "drawing/mixed-media: charcoal, colored-pencil"
    )
    file17 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/car_in_a_minor_swirl.jpg')
    prod17.photo.attach(io: file17, filename: 'file17')
    prod17.save!

    prod18 = Product.create(
        title: "In the Desert...",
        artist_id: user3.id,
        price: 15.00,
        media_type: "drawing/mixed-media: pencil, charcoal, colored-pencil, pastel"
    )
    file18 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/in_the_desert.jpg')
    prod18.photo.attach(io: file18, filename: 'file18')
    prod18.save!

    prod19 = Product.create(
        title: "Lucy",
        artist_id: user3.id,
        price: 15.00,
        media_type: "painting/mixed-media: acrylic (over failed pastel)"
    )
    file19 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/lucy.jpg')
    prod19.photo.attach(io: file19, filename: 'file19')
    prod19.save!

    prod20 = Product.create(
        title: "Goin Steady",
        artist_id: user3.id,
        price: 10.00,
        media_type: "drawing/mixed-media: pencil, pastel"
    )
    file20 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/goin_steady.jpg')
    prod20.photo.attach(io: file20, filename: 'file20')
    prod20.save!

    prod21 = Product.create(
        title: "Just Relax",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing/mixed-media: charcoal, pastel"
    )
    file21 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/just_relax.jpg')
    prod21.photo.attach(io: file21, filename: 'file21')
    prod21.save!

    prod22 = Product.create(
        title: "Strange Fruit",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing/mixed-media: charcoal, colored-pencil"
    )
    file22 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/strange_fruit.jpg')
    prod22.photo.attach(io: file22, filename: 'file22')
    prod22.save!

    prod23 = Product.create(
        title: "One of those days",
        artist_id: user3.id,
        price: 3.00,
        media_type: "mixed-media/painting/drawing: charcoal, acrylic"
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
        media_type: "drawing/mixed-media: charcoal, pastel"
    )
    file25 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/posted_up.jpg')
    prod25.photo.attach(io: file25, filename: 'file25')
    prod25.save!

    prod26 = Product.create(
        title: "me drawing you drawing me",
        artist_id: user3.id,
        price: 5.00,
        media_type: "drawing/mixed-media: pencil, colored-pencil"
    )
    file26 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/me_drawing_you_drawing_me.jpg')
    prod26.photo.attach(io: file26, filename: 'file26')
    prod26.save!

    prod27 = Product.create(
        title: "B#",
        artist_id: user3.id,
        price: 7.00,
        media_type: "drawing/mixed-media: pencil, colored-pencil"
    )
    file27 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/b%23.jpg')
    prod27.photo.attach(io: file27, filename: 'file27')
    prod27.save!

    prod28 = Product.create(
        title: "S.O.S.",
        artist_id: user3.id,
        price: 7.00,
        media_type: "drawing/mixed-media: charcoal, pastel, ink"
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

    prod30 = Product.create(
        title: "Pastel Bouquet",
        artist_id: user2.id,
        price: 55.00,
        media_type: "flowers: eucalyptus, roses, and a variety of other hand selected flowers"
    )
    file30 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers1.jpg')
    prod30.photo.attach(io: file30, filename: 'file30')
    prod30.save!

    prod31 = Product.create(
        title: "Spring Bouquet",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: tulips and roses intertwined in springtime jubilation" 
    )
    file31 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers2.jpg')
    prod31.photo.attach(io: file31, filename: 'file31')
    prod31.save!

    prod32 = Product.create(
        title: "Garden Party",
        artist_id: user2.id,
        price: 450.00,
        media_type: "flowers: eucalyptus, roses, and so much more!"
    )
    file32 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers3.jpg')
    prod32.photo.attach(io: file32, filename: 'file32')
    prod32.save!

    prod33 = Product.create(
        title: "Sample Selections",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: variety of flowers"
    )
    file33 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers4.jpg')
    prod33.photo.attach(io: file33, filename: 'file33')
    prod33.save!

    prod34 = Product.create(
        title: "Fresh Bouquet",
        artist_id: user2.id,
        price: 35.00,
        media_type: "flowers: variety of flowers"
    )
    file34 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers5.jpg')
    prod34.photo.attach(io: file34, filename: 'file34')
    prod34.save!

    prod35 = Product.create(
        title: "Untitled",
        artist_id: user2.id,
        price: 15.00,
        media_type: "flowers: pine branches, roses, and a variety of other flowers"
    )
    file35 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers6.jpg')
    prod35.photo.attach(io: file35, filename: 'file35')
    prod35.save!

    prod36 = Product.create(
        title: "Bold Bouquet",
        artist_id: user2.id,
        price: 25.00,
        media_type: "flowers: a variety of hand selected flowers with a blue and violet color scheme"
    )
    file36 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers7.jpg')
    prod36.photo.attach(io: file36, filename: 'file36')
    prod36.save!

    prod37 = Product.create(
        title: "Light and Fresh",
        artist_id: user2.id,
        price: 350.00,
        media_type: "flowers: alstroemaria, hydrangea, roses"
    )
    file37 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers8.jpg')
    prod37.photo.attach(io: file37, filename: 'file37')
    prod37.save!

    prod38 = Product.create(
        title: "Centerpiece",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: pink roses in a forest of greenery"
    )
    file38 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers9.jpg')
    prod38.photo.attach(io: file38, filename: 'file38')
    prod38.save!

    prod39 = Product.create(
        title: "An Energetic Bouquet",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: a handpicked selection of beautiful and long-lasting flowers"
    )
    file39 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers10.jpg')
    prod39.photo.attach(io: file39, filename: 'file39')
    prod39.save!

    prod40 = Product.create(
        title: "Sample Selection",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: bouquets featuring sunflowers, carnations, roses, and alstroemaria"
    )
    file40 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers11.jpg')
    prod40.photo.attach(io: file40, filename: 'file40')
    prod40.save!

    prod41 = Product.create(
        title: "Pastel",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: fresh, long-lasting flowers with a pastel color scheme"
    )
    file41 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers12.jpg')
    prod41.photo.attach(io: file41, filename: 'file41')
    prod41.save!

    prod42 = Product.create(
        title: "A Lively Bouquet",
        artist_id: user2.id,
        price: 45.00,
        media_type: "flowers: hand selected flowers in shades ranging from maroon to fuschia"
    )
    file42 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers13.jpg')
    prod42.photo.attach(io: file42, filename: 'file42')
    prod42.save!

    prod43 = Product.create(
        title: "A Trunk Full Of Life",
        artist_id: user2.id,
        price: 250.00,
        media_type: "flowers: local, hand selected blossoms and eucalyptus greens"
    )
    file43 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers14.jpg')
    prod43.photo.attach(io: file43, filename: 'file43')
    prod43.save!

    prod44 = Product.create(
        title: "A Dash of Color",
        artist_id: user2.id,
        price: 25.00,
        media_type: "flowers: lively blossoms and rich greenery"
    )
    file44 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers15.jpg')
    prod44.photo.attach(io: file44, filename: 'file44')
    prod44.save!

    prod45 = Product.create(
        title: "Springtime Bouquets",
        artist_id: user2.id,
        price: 80.00,
        media_type: "flowers: a handpicked selection of beautiful and long-lasting flowers"
    )
    file45 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers16.jpg')
    prod45.photo.attach(io: file45, filename: 'file45')
    prod45.save!

    prod46 = Product.create(
        title: "Spherical Bouquet",
        artist_id: user2.id,
        price: 35.00,
        media_type: "flowers: roses and greenery"
    )
    file46 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers17.jpg')
    prod46.photo.attach(io: file46, filename: 'file46')
    prod46.save!

    prod47 = Product.create(
        title: "Winter Bouquet",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: a tasteful arrangement of winter friendly blooms"
    )
    file47 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers18.jpg')
    prod47.photo.attach(io: file47, filename: 'file47')
    prod47.save!

    prod48 = Product.create(
        title: "An Eyeful",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: a handpicked selection of beautiful and long-lasting flowers"
    )
    file48 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers19.jpg')
    prod48.photo.attach(io: file48, filename: 'file48')
    prod48.save!

    prod49 = Product.create(
        title: "Cream Puff",
        artist_id: user2.id,
        price: 50.00,
        media_type: "flowers: full-bodied, cream flowers (puppy not included)"
    )
    file49 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers44.jpg')
    prod49.photo.attach(io: file49, filename: 'file49')
    prod49.save!

    prod50 = Product.create(
        title: "Sunshine Explosion",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: a handpicked selection of beautiful and long-lasting flowers"
    )
    file50 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers20.jpg')
    prod50.photo.attach(io: file50, filename: 'file50')
    prod50.save!

    prod51 = Product.create(
        title: "Whimsical Bouquet",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: lavender, eucalyptus, and fresh pink and yellow blooms"
    )
    file51 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers21.jpg')
    prod51.photo.attach(io: file51, filename: 'file51')
    prod51.save!

    prod52 = Product.create(
        title: "Color Gone Wild",
        artist_id: user2.id,
        price: 50.00,
        media_type: "flowers: hand picked, local flowers bursting with color"
    )
    file52 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers22.jpg')
    prod52.photo.attach(io: file52, filename: 'file52')
    prod52.save!

    prod53 = Product.create(
        title: "Rustic Simplicity",
        artist_id: user2.id,
        price: 15.00,
        media_type: "flowers: home-grown, white blooms with a pine trunk backdrop"
    )
    file53 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers23.jpg')
    prod53.photo.attach(io: file53, filename: 'file53')
    prod53.save!

    prod54 = Product.create(
        title: "Willy Wonka Bouquet",
        artist_id: user2.id,
        price: 20.00,
        media_type: "flowers: a handpicked selection of astonishingly colorful flowers"
    )
    file54 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers24.jpg')
    prod54.photo.attach(io: file54, filename: 'file54')
    prod54.save!

    prod55 = Product.create(
        title: "Violet Foxtail",
        artist_id: user2.id,
        price: 15.00,
        media_type: "flowers: a handpicked selection of locally grown flowers"
    )
    file55 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers25.jpg')
    prod55.photo.attach(io: file55, filename: 'file55')
    prod55.save!

    prod56 = Product.create(
        title: "Flower Chain",
        artist_id: user2.id,
        price: 15.00,
        media_type: "flowers: a handpicked selection of flowers woven together"
    )
    file56 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers26.jpg')
    prod56.photo.attach(io: file56, filename: 'file56')
    prod56.save!

    prod57 = Product.create(
        title: "Flower Crowns",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: fresh pink blooms shaped into crowns"
    )
    file57 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers27.jpg')
    prod57.photo.attach(io: file57, filename: 'file57')
    prod57.save!

    prod58 = Product.create(
        title: "Custom Design",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: your choice of flowers woven into a custom-fit crown or corsage"
    )
    file58 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers28.jpg')
    prod58.photo.attach(io: file58, filename: 'file58')
    prod58.save!

    prod59 = Product.create(
        title: "Purple Goddess",
        artist_id: user2.id,
        price: 50.00,
        media_type: "flowers: fresh, pink and purple flowers nested in greenery"
    )
    file59 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers29.jpg')
    prod59.photo.attach(io: file59, filename: 'file59')
    prod59.save!

    prod60 = Product.create(
        title: "Wild Bouquet",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: a handpicked selection of beautiful and long-lasting flowers"
    )
    file60 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers30.jpg')
    prod60.photo.attach(io: file60, filename: 'file60')
    prod60.save!

    prod61 = Product.create(
        title: "Riotous Color",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: a handpicked selection of beautiful, locally grown flowers"
    )
    file61 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers31.jpg')
    prod61.photo.attach(io: file61, filename: 'file61')
    prod61.save!

    prod62 = Product.create(
        title: "Autumn Bouquet",
        artist_id: user2.id,
        price: 50.00,
        media_type: "flowers: long-lasting, autumn blooms in falltime colors"
    )
    file62 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers32.jpg')
    prod62.photo.attach(io: file62, filename: 'file62')
    prod62.save!

    prod63 = Product.create(
        title: "Wildflower Bouquet",
        artist_id: user2.id,
        price: 20.00,
        media_type: "flowers: fresh, coloful flowers"
    )
    file63 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers33.jpg')
    prod63.photo.attach(io: file63, filename: 'file63')
    prod63.save!

    prod64 = Product.create(
        title: "A Rosy Handful",
        artist_id: user2.id,
        price: 25.00,
        media_type: "flowers: pink roses and white daisies"
    )
    file64 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers34.jpg')
    prod64.photo.attach(io: file64, filename: 'file64')
    prod64.save!

    prod65 = Product.create(
        title: "Elegant Centerpiece",
        artist_id: user2.id,
        price: 45.00,
        media_type: "flowers: durable, long-lasting sprigs"
    )
    file65 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers35.jpg')
    prod65.photo.attach(io: file65, filename: 'file65')
    prod65.save!

    prod66 = Product.create(
        title: "Earthy Centerpiece",
        artist_id: user2.id,
        price: 30.00,
        media_type: "flowers: durable, long-lasting sprigs"
    )
    file66 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers36.jpg')
    prod66.photo.attach(io: file66, filename: 'file66')
    prod66.save!

    prod67 = Product.create(
        title: "Idyllic Bouquet",
        artist_id: user2.id,
        price: 40.00,
        media_type: "flowers: a handpicked selection of beautiful and long-lasting flowers"
    )
    file67 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers37.jpg')
    prod67.photo.attach(io: file67, filename: 'file67')
    prod67.save!

    prod68 = Product.create(
        title: "Springtime Bouquet",
        artist_id: user2.id,
        price: 35.00,
        media_type: "flowers: a handpicked selection fresh flowers in springtime colors"
    )
    file68 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers38.jpg')
    prod68.photo.attach(io: file68, filename: 'file68')
    prod68.save!

    prod69 = Product.create(
        title: "Centerpiece Bouquets",
        artist_id: user2.id,
        price: 120.00,
        media_type: "flowers: purple sage and a variety of other hand selected, colorful flowers"
    )
    file69 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers39.jpg')
    prod69.photo.attach(io: file69, filename: 'file69')
    prod69.save!

    prod70 = Product.create(
        title: "Woven Bouquet Holder",
        artist_id: user2.id,
        price: 10.00,
        media_type: "mixed-media/flowers: vase, twine"
    )
    file70 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers40.jpg')
    prod70.photo.attach(io: file70, filename: 'file70')
    prod70.save!

    prod71 = Product.create(
        title: "Green Centerpiece",
        artist_id: user2.id,
        price: 25.00,
        media_type: "flowers: home-grown greenery and blossoms"
    )
    file71 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers41.jpg')
    prod71.photo.attach(io: file71, filename: 'file71')
    prod71.save!

    prod72 = Product.create(
        title: "Motion Bouquet",
        artist_id: user2.id,
        price: 27.00,
        media_type: "flowers: hand selected flowers in subdued colors"
    )
    file72 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers42.jpg')
    prod72.photo.attach(io: file72, filename: 'file72')
    prod72.save!

    prod73 = Product.create(
        title: "Eclectic Centerpiece",
        artist_id: user2.id,
        price: 27.00,
        media_type: "flowers: a handpicked selection of bold and colorful flowers"
    )
    file73 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/flowers43.jpg')
    prod73.photo.attach(io: file73, filename: 'file73')
    prod73.save!

    prod74 = Product.create(
        title: "Somber Child",
        artist_id: user3.id,
        price: 15.00,
        media_type: "painting: acrylic"
    )
    file74 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/spanish-boy.jpg')
    prod74.photo.attach(io: file74, filename: 'file74')
    prod74.save!

   