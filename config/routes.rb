Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :spots, only: [:index, :show, :create, :destroy]
    resources :reviews, only: [:create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :favorites, only: [:create, :destroy]
  end

  root "static_pages#root"
end
