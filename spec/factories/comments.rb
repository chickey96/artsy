FactoryBot.define do
  factory :comment do
    body        { Faker::Quote.famous_last_words }
    product_id  { Faker::Number.number(digits: 10) }
    user_id     { Faker::Number.number(digits: 10) }
  end
end
