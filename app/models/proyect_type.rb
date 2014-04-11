class ProyectType < ActiveRecord::Base

  fields do
    name    :string
    description :text
    deleted :datetime
    timestamps
  end

  has_many :proyects

end
