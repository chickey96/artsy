Rails.application.routes.draw do
  root to: 'static_pages#root'

  get '/search/:query', to: 'api/products#search'
  get '/shop', to: 'api/products#shop'
  get '/listing/:productId', to: 'api/products#update'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show, :edit, :update]
    resource :session, only:[:new, :create, :destroy]
    resources :products, only: [:new, :create, :show, :index]
    resources :comments, only: [:create, :update, :show, :index, :destroy]
    resources :carts, only: [:create, :destroy, :index]
  end

  # catch all route to redirect all but active storage requests to splash page
  get '*path' => redirect('/'), constraints: -> (req){
    req.path.exclude?('rails/active_storage')
  }

end
