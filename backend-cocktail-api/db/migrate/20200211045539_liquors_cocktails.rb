class LiquorsCocktails < ActiveRecord::Migration[6.0]
  def change
    create_table :liquors_cocktails do |t|
      t.integer :liquor_id
      t.integer :cocktail_id
      
      t.timestamps
    end
  end
end
