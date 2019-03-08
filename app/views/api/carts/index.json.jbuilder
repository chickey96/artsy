json.array! @carts do |cart|
  json.extract! cart, :id, :user_id, :product_id
  json.extract! cart.product, :title, :price
  json.photoUrl url_for(cart.product.photo)
end