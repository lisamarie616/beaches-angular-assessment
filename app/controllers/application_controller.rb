class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  skip_before_action :verify_authenticity_token

  respond_to :json

  def angular
    render 'layouts/application'
  end
  
  def default_serializer_options
    {root: false}
  end 

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me) }
      devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation, :current_password) }
    end

  private
    def set_beach
      Beach.find(params[:beach_id] || params[:id])
    end

    def set_comment
      Comment.find(params[:id])
    end

    def set_user
      User.find(params[:user_id] || params[:id])
    end
end
