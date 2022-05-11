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
end
