class ProyectsController < ApplicationController
  layout nil
  respond_to :json
	
  def index  
	  respond_with Proyect.all
  end

  def create
	  respond_with Proyect.create( filter_params )
  end

  def update
    proyect = Proyect.find( params[ :id ] )
    respond_with proyect.update( filter_params )
  end

  def destroy
  	respond_with Proyect.destroy( params[ :id ] )
  end

  private
    def filter_params
      params.require( :proyect ).permit( :name, :proyect_type_id )
    end
	
end
