Rails.application.routes.draw do

	resources :comments

	# get "comments/new"

	# get "comments/test"

		# resources :welcome 



	# root "welcome#show", page: "index"

	# get "/welcome/:page" => "welcome#show"

	# get "welcome/gallery"
	root "welcome#index"

	get "welcome/index"

	get "welcome/about"

	get "welcome/gallery"

	get "welcome/menu"

	get "welcome/contact"

	get "welcome/links"

	get "welcome/calendar"


	



	# root 'welcome#index'

	# resources :welcome do 
	# 	collection do
	# 		patch :menu
	# 	end
	# end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
