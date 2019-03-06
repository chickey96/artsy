class Api::CommentsController < ApplicationController

  before_action :require_login, only:[ :new, :create, :edit, :update, :destroy]

  def new
    @comment = Comment.new()
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    #get product_id from current url?

    if @comment.save
      render 'api/products/@comment.product_id'
    else  
      render json: @comment.errors.full_messages, status: 401
      render :new #still on product show pg?
    end   
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def index
    @comments = Comments.all 
    #filter by product_id here or in component?
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private:
  def comment_params
    params.require[:comment].permit[:body]
  end
end
