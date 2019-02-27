class SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.save
      login(@user)
      # redirect_to main page
    else
      render json: ['Invalid Credentials'] 
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

end
