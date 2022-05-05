# == Schema Information
#
# Table name: products
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  price      :float            not null
#  media_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Product < ApplicationRecord
  validates :title, :artist_id, :price, :media_type, presence: true

  validate :ensure_photo

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

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

  def parse_category
    split_point = self.media_type.index(':')
    return self.media_type[0...split_point].strip
  end

  def parse_materials
    split_point = self.media_type.index(':') + 1
    return self.media_type[split_point..-1].strip
  end
end
