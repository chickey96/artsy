class Api::CommentsController < ApplicationController

  before_action :require_login, only:[ :create, :edit, :update, :destroy]

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render 'api/comments/show'
    else  
      render json: @comment.errors.full_messages, status: 401
    end   
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def index
    @comments = Comment.where(product_id: params[:productId])
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update_attributes(params[:comment][:body])
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    if @comment 
      delete @comment 
    else  
      render json: ["Cannot delete someone else's comment"]
    end
  end

  private
  def comment_params
    params.require[:comment].permit[:body, :product_id]
  end
end
