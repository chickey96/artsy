class Api::ProductsController < ApplicationController
  
  def show
    @product = Product.find(params[:id])
  end

  
  def index
    products = Product.all
    @products = products.select do |product| 
      product.media_type.include?(params[:category])
    end
  end

  def search
    query = params[:query].downcase
    products = Product.all 
    mediaProducts = products.select do |product|
      product.media_type.downcase.include?(query)
    end
    titleProducts = products.select do |product|
      product.title.downcase.include?(query)
    end
    userProducts = products.select do |product|
      product.artist.username.downcase.include?(query)
    end
    priceProducts = products.select do |product|
      product.price.to_s.downcase.include?(query)
    end
    @products = (mediaProducts + titleProducts + 
      userProducts + priceProducts)
    render 'api/products/index'
  end

end
