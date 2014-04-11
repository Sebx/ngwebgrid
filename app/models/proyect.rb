class Proyect < ActiveRecord::Base
  default_scope :conditions => { :deleted => nil }, :order => 'created_at DESC'
  #accepts_nested_attributes_for :proyect_type
  
  fields do
    name    :string
    deleted :datetime
    timestamps
  end

  belongs_to :proyect_type

end
