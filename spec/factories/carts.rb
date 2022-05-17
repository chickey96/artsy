FactoryBot.define do
  factory :cart do
    product_id  { Faker::Number.number(digits: 10) }
    user_id     { Faker::Number.number(digits: 10) }
  end
end
