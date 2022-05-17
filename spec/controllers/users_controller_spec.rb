require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe "POST #create" do 

    context "with valid params" do 
      before(:each) do 
        post :create, params: { user: 
          { username: 'carl', password: 'password', email: 'carl@gmail.com'}}
      end

      it "should render show page" 
    end

    context "with invalid params" do 
      before(:each) do 
        post :create, params: { user: 
          { username: 'carl', email: 'email', password: ''}}
      end

      it { should respond_with(401) }
    end
  end
end
