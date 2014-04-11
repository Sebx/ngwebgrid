class ProyectTypesController < ApplicationController
  layout nil
  respond_to :json

  def index
	  respond_with ProyectType.all
  end

  def create
	  respond_with ProyectType.create( filter_params )
  end

  def update
    proyecttypes = ProyectType.find( params[ :id ] )
    respond_with proyecttypes.update( filter_params )
  end

  def destroy
  	respond_with ProyectType.destroy( params[ :id ] )
  end

  private
    def filter_params
      params.require( :proyect_type ).permit( :name, :description )
    end	
end
