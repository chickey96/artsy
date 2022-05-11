require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
  # validations
  # associations
  # class methods
  # error messages
  describe "validations" do
    it "should validate presence of name" 
    it "should validate presence of email" 
    it "should validate uniqueness of name" 
    it "should validate uniqueness of email" 
  end

  describe "associations" do 
    it "should have many artworks"
    it "should have many comments"
    it "should have many carts"
  end

  describe "class methods" do 
    describe "::invalid_email_format?" do 
      it "should return true if email is missing @"
      it "should return true if email is missing ."
    end
  end

  
end
