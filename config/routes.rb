Rails.application.routes.draw do

	root "welcome#show", page: "index"

	get "/welcome/:page" => "welcome#show"







	# root 'welcome#index'

	# resources :welcome do 
	# 	collection do
	# 		patch :menu
	# 	end
	# end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
