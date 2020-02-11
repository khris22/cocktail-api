class CreateCocktails < ActiveRecord::Migration[6.0]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.string :flavor
      t.string :ingredient
      t.string :preparation

      t.timestamps
    end
  end
end
