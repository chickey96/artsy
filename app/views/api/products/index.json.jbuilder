
json.array! @products do |product|
  json.extract! product, :id, :title, :artist_id, :price, :media_type
  json.photoUrl url_for(product.photo)
  json.artist product.artist.username
end



