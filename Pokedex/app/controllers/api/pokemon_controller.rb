class Api::PokemonController < ApplicationController
  
  def index

    @pokemon = Pokemon.all
    render :index
    # render json: Pokemon.all
  end

  def show
    @pokemon = Pokemon.find_by_id(params[:id])
    render :show 
  end

end
