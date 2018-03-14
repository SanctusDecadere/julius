class ContactMailer < ApplicationMailer

  def new_comment

    mail to: "emiliosoto4@gmail.com",
    	subject: "You have visited the Julius Website"
  end
end









