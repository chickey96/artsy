@products.each do |product|
  json.extract! product, :id, :title, :artist_id, :price, :media_type
end