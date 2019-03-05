class Api::ProductsController < ApplicationController
  
  def show
    @product = Product.find(params[:id])
  end

  
  def index
    @products = Product.where(params[:media_type].include?(params[:product][:category]))
  end

end
