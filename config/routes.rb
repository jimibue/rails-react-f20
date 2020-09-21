Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # prepend /api to all of our routes
  # /api/items
  namespace :api do
    resources :items
  end
end
