class Product < ApplicationRecord
  validates :title, :artist_id, :price, :media_type, presence: true

  belongs_to :artist, 
    primary_key: :id, 
    foreign_key: :artist_id,
    class_name: :User

  has_many :comments,
    primary_key: :id, 
    foreign_key: :product_id,
    class_name: :Product 

  has_many :carts,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Cart 

  has_one_attached :photo

  
end