

class CommentsController < ApplicationController

	def new
		@comment = Comment.new
		
	end

	def create
		# @comment = Comment.new(params[:comment])
		@comment = Comment.new(user_feedback)
		if @comment.save

			ContactMailer.new_comment(@comment).deliver_now

			redirect_to welcome_index_path
		else
			redirect_to new_comment_path
		end
		
	end


	private 

	def user_feedback
		params.require(:comment).permit(:name, :email, :message)
		
	end

end
