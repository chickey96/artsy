require 'rails_helper'

RSpec.describe Product, type: :model do
  subject(:product) { FactoryBot.build(:product) }
  
  describe "validations" do
    invalid_product = FactoryBot.build(:product, title: nil)

    it "should validate presence of title" do 
      expect(invalid_product.valid?).to be false 
    end

    it { should validate_presence_of(:artist_id) }
    it { should validate_presence_of(:price) } 
    it { should validate_presence_of(:media_type) } 
  end

  describe "associations" do 
    before(:each) do 
      file4 = open('https://s3-us-west-1.amazonaws.com/artsy-dev/the_fury.jpg')
      product.photo.attach(io: file4, filename: 'file4')
      product.save
    end

    it { should belong_to(:artist) }
    it { should have_many(:comments) }
    it { should have_many(:carts) }

    it "should have one attached photo" do 
      expect(product.photo).to be_attached
    end
  end 
end
