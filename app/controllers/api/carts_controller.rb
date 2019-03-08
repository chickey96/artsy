class Api::CartsController < ApplicationController

  before_action :require_login, only:[:create, :index, :destroy]

  def create
    @cart = Cart.new(cart_params)
    @cart.save
  end

  def index
    @carts = Cart.where(user_id: params[:userId])
  end

  def destroy
    @cart = Cart.find(params[:id])
    @cart.destroy 
  end

  private
  def cart_params
    params.require(:cart).permit(:user_id, :product_id)
  end
end
