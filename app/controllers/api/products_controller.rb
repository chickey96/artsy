class Api::ProductsController < ApplicationController
  
  def show
    @product = Product.find(params[:id])
  end

  
  def index
    @products = Product.where(:media_type => params[:media_type])
    # @page_name = params[:page_name] 
    # json.page_name @page_name
  end

end
