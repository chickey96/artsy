json.array! @carts do |cart|
  json.extract! cart, :id, :user_id, :product_id
end