class Comment < ApplicationRecord
  validates :body, :user_id, :product_id, presence: true

  belongs_to :user, 
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

  belongs_to :product, 
    primary_key: :id, 
    foreign_key: :product_id,
    class_name: :Product 

  
end