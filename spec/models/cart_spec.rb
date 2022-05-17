require 'rails_helper'

RSpec.describe Cart, type: :model do
  describe "validations" do 
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:product_id) }
  end

  describe "associations" do 
    it { should belong_to(:user) }
    it { should belong_to(:product) }
  end
end
