class LiquorsCocktails < ActiveRecord::Migration[6.0]
  def change
    create_table :liquors_cocktails do |t|
      t.belongs_to :liquor, foreign_key: true
      t.belongs_to :cocktail, foreign_key: true

      t.timestamps
    end
  end
end
