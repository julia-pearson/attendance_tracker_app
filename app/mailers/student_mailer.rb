class StudentMailer < ApplicationMailer
	default from: "testingemailusability@gmail.com"

	def welcome_email(user)
		@user = user
		@url = 'http://www.google.com'
		mail(to: @user.email, subject: 'Welcome to' @)
end
