class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.new_comment.subject
  #
  def new_comment
   # @comment = comment
   # @item = @comment.item
    mail to: "emiliosoto4@gmail.com",
    	subject: "You have visited the Julius Website"
  end
end









