json.extract! @cart, :id, :user_id, :product_id
json.extract! @product, :id, :title, :price
json.photoUrl url_for(@product.photo)