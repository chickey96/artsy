class Api::ProductsController < ApplicationController

  before_action :require_login, only:[:create ]

  def create
    @product = Product.new(product_params)
    @product.artist_id = current_user.id 
    
    if @product.save 
      render 'api/products/show'
    else
      render json: @product.errors, status: 401 
    end
  end

  def show
    @product = Product.find(params[:id])
  end
  
  def index
    products = Product.all
    @products = products.select do |product| 
      product.media_type.include?(params[:category])
    end
  end

  def update
    @product = Product.find(params[:id])

    if @product.update_attributes(product_params)
      render 'api/products/index'
    else
      render json: @product.errors.full_messages, status: 401
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

  def shop 
    @products = current_user.artworks  
    render 'api/products/index'
  end

  private
  def product_params
    params.require(:product).permit(:title, 
                                    :artist_id, 
                                    :price, 
                                    :media_type, 
                                    :photo)
  end

end
