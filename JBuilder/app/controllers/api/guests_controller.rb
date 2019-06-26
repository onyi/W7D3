class Api::GuestsController < ApplicationController
  def index
    @guests = Guest.all
    # debugger;
    render :index
  end

  def show
    @guest = Guest.find_by(id: params[:id])
    render :show
  end
end
