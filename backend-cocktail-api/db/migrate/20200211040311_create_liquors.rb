class CreateLiquors < ActiveRecord::Migration[6.0]
  def change
    create_table :liquors do |t|
      t.string :name
      t.string :alcohol_content
      t.string :made_from
      t.string :origin
      t.timestamps
    end
  end
end
