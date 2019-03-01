class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string   :title, null: false 
      t.text     :description, null: false 
      t.integer  :year, null: false 
      t.string   :maturity_rating, null: false 
      t.timestamps
    end

    add_index :movies, :title, unique: true
  end
end