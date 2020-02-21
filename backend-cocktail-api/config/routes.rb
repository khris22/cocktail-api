Rails.application.routes.draw do
  # root 'cocktails#index'
  namespace :api do
    namespace :v1 do
      resources :cocktails  
      resources :liquors
    end
  end
end
