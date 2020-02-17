class UpdateForeignKeyAddOnDeleteConstraint < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :liquor_cocktails, :cocktails
    remove_foreign_key :liquor_cocktails, :liquors 
    add_foreign_key :liquor_cocktails, :cocktails, on_delete: :cascade
    add_foreign_key :liquor_cocktails, :liquors, on_delete: :cascade

  end
end
