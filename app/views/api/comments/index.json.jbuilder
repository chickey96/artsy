json.array! @comments do |comment|
  json.extract! comment, :id, :body, :user_id, :product_id
  json.author comment.user.username
end


