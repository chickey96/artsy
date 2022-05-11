require 'rails_helper'

RSpec.describe User, type: :model do
  
  subject(:user) { User.new(username: "charlie", 
                            email: "charl@gmail.com",
                            password_digest: "password_digest",
                            session_token: "session_token") }

  describe "validations" do
    it "should validate presence of username" do 
      user = User.new(email: "email")
      expect(user.valid?).to be false
    end

    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) } 
    it { should validate_uniqueness_of(:username)}
    it { should validate_uniqueness_of(:email)}
  end

  describe "associations" do 
    it { should have_many(:artworks) }
    it { should have_many(:comments) }
    it { should have_many(:carts) }
  end

  describe "class methods" do 
    describe "::invalid_email_format?" do 
      it "should return true if email is missing @" do 
        user = User.new(email: "emailatgmail.com")
        expect(user.valid?).to be false 
      end
      it "should return true if email is missing ." do 
        user = User.new(email: "email@gmailcom")
        expect(user.valid?).to be false
      end

      it "should return true if email has no . after @" do 
        user = User.new(email: "email.gmail@com")
        expect(user.valid?).to be false
      end
    end
  end

  
end
