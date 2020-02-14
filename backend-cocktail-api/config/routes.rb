Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/test', to: 'application#test'
  # root 'cocktails#index'
  
  namespace :api do
    namespace :v1 do
      resources :cocktails  
      resources :liquors
    end
  end

end
