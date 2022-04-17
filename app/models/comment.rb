# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
