class ContactMailer < ApplicationMailer

  def new_comment(comment)
  	@comment = comment

    mail to: "smfxcmes4@gmail.com",
    	subject: "You have visited the Julius Website"
  end
end









