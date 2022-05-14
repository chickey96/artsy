require 'rails_helper'

RSpec.describe Comment, type: :model do
  subject { FactoryBot.build(:comment) }

  describe "validations" do
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:product_id) }
  end

  describe "associations" do 
    it { should belong_to(:user) }
    it { should belong_to(:product) }
  end
end
