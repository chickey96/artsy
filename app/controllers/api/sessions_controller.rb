class Api::SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      error = ['Username and Password not found']
      render json: error, status: 401 
    end
  end

  def destroy
    logout!
  end

end
