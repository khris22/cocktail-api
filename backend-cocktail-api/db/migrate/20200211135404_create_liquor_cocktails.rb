class CreateLiquorCocktails < ActiveRecord::Migration[6.0]
  def change
    create_table :liquor_cocktails do |t|
      t.references :liquor, null: false, foreign_key: true
      t.references :cocktail, null: false, foreign_key: true
      # t.on_delete :nullify
      t.timestamps
    end
  end
end
