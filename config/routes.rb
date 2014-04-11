Ngwebgrid::Application.routes.draw do

  scope :api do
    resources :proyects, defaults: {format: :json}
    resources :proyecttypes, controller: 'proyect_types', defaults: {format: :json}
  end

  root 'welcome#index'
end
