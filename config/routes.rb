Pleasure::Application.routes.draw do
  root :to => "top#index"
  resources :users
  resources :administrators
  resources :announcements
  resources :packages
end
