class HoboMigration1 < ActiveRecord::Migration
  def self.up
    create_table :proyects do |t|
      t.string   :name
      t.datetime :deleted
      t.datetime :created_at
      t.datetime :updated_at
      t.integer  :proyect_type_id
    end
    add_index :proyects, [:proyect_type_id]

    create_table :proyect_types do |t|
      t.string   :name
      t.text     :description
      t.datetime :deleted
      t.datetime :created_at
      t.datetime :updated_at
    end
  end

  def self.down
    drop_table :proyects
    drop_table :proyect_types
  end
end
