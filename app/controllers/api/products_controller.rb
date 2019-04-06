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
    products = Product.all 
    mediaProducts = products.select do |product|
      product.media_type.include?(params[:query])
    end
    titleProducts = products.select do |product|
      product.title.include?(params[:query])
    end
    userProducts = products.select do |product|
      product.artist.username.include?(params[:query])
    end
    priceProducts = products.select do |product|
      product.price.to_s.include?(params[:query])
    end
    @products = (mediaProducts + titleProducts + 
      userProducts + priceProducts)
    render 'api/products/index'
  end

end
