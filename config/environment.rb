# Load the Rails application.
require_relative 'application'
require 'mail'

# Initialize the Rails application.
Rails.application.initialize!



# ActionMailer::Base.smtp_settings = {
#   :user_name => ENV['SENDGRID_USERNAME'],
#   :password => ENV['SENDGRID_PASSWORD'],
#   :domain => 'juliusbar.herokuapp.com',
#   :address => 'smtp.sendgrid.net',
#   :port => 587,
#   :authentication => :plain,
#   :enable_starttls_auto => true
# }


  # config.action_mailer.delivery_method = :smtp


  # config.action_mailer.smtp_settings = {
  #   address: 'smtp.sendgrid.net',
  #   port: 587,
  #   domain: 'juliusbar.herokuapp.com',
  #   authentication: 'plain',
  #   enable_starttls_auto: true,
  #   user_name: ENV['SENDGRID_USERNAME'],
  #   password: ENV['SENDGRID_PASSWORD']
  # }

  # config.action_mailer.default_url_options = { host: 'juliusbar.herokuapp.com/' }




