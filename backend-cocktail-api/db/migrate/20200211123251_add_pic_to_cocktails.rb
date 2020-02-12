class AddPicToCocktails < ActiveRecord::Migration[6.0]
  def change
    add_column :cocktails, :pic, :string
  end
end
