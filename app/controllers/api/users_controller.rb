class Api::UsersController < ApplicationController

  def new

  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def edit
  end

  def update
    @current_user = @current_user || User.find(params[:id])
    if @current_user.update_attributes(user_params)
      render 'api/users/show'
    else
      render json: @current_user.errors.full_messages, status: 401
    end
  end

  def destroy
    @user = @current_user || User.find(params[:id])
    # @user.destroy
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
