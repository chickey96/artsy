
json.array! @products do |product|
  json.extract! product, :id, :title, :artist_id, :price, :media_type
  json.photoUrl product.photo.service_url
  json.artist product.artist.username
end



