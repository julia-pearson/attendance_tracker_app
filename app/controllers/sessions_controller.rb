class SessionsController <ApplicationController

	#/login
	def new
	end

	#/login
	def create
		user = User.find_by({email: params['/'][:email]})
		binding.pry
		if user && user.authenticate(params['/'][:password])
			session[:user_id] = user.id
			binding.pry
			redirect_to cohorts_path(@cohorts)
		else 
			flash[:notice] = "Incorrect e-mail and/or password. Please try again."
			render :new
		end
	end

	#/logout
	def destroy
		session[:user_id] = nil
		flash[:notice] = "You are logged out"
		redirect_to "/"
	end

end
