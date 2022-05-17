FactoryBot.define do
  factory :product do
    title         { Faker::Name.name }
    artist_id     { Faker::Number.number(digits: 10) }
    price         { Faker::Number.decimal(l_digits: 2) }
    media_type    { Faker::Commerce.material }
  end
end
