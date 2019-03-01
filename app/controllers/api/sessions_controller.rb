class Api::SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
  
    if @user
      login(@user)
      render 'api/users/show'
    else
      error = ['Invalid credentials']
      render json: error, status: 401 
    end
  end

  def destroy
    if current_user
      logout!
      render json: {} 
    else  
      error = ['Nobody logged in']
      render json: error, status: 401
    end
  end
end
