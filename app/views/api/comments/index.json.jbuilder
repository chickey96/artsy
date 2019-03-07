json.array! @comments do |comment|
  json.extract! comment, :id, :body, :user_id, :product_id
end
