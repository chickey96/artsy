class Api::ProductsController < ApplicationController
  
  def show
    debugger;
    @product = Product.find(params[:id])
  end

  
  def index
    products = Product.all
    @products = products.select do |product| 
      product.media_type.include?(params[:category])
    end
  end

end
