class Api::CartsController < ApplicationController

  before_action :require_login, only:[:create, :index, :destroy]

  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render 'api/carts/show'
    else  
      render json: @comment.errors.full_messages, status: 401
    end  
  end

  def show
    @cart = Cart.find(params[:id])
  end

  def index
    @carts = Cart.where(user_id: params[:userId])
  end

  def destroy
    @cart = Cart.find(params[:id])
    @cart.destroy 
    @cartId = params[:cartId]
  end

  private
  def cart_params
    params.require(:cart).permit(:user_id, :product_id)
  end
end
