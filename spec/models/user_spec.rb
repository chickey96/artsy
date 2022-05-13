require 'rails_helper'

RSpec.describe User, type: :model do
  
  subject { User.new( username: "carl", 
                      email: "carl@gmail.com",
                      password_digest: "p_digest",
                      session_token: "s_token" ) }

  describe "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) } 
    it { should validate_uniqueness_of(:username)}
    it { should validate_uniqueness_of(:email)}
    it { should validate_length_of(:password).is_at_least(6) }
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
