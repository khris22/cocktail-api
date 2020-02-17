# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_17_150950) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cocktails", force: :cascade do |t|
    t.string "name"
    t.string "flavor"
    t.string "ingredient"
    t.string "preparation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "pic"
  end

  create_table "liquor_cocktails", force: :cascade do |t|
    t.bigint "liquor_id", null: false
    t.bigint "cocktail_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cocktail_id"], name: "index_liquor_cocktails_on_cocktail_id"
    t.index ["liquor_id"], name: "index_liquor_cocktails_on_liquor_id"
  end

  create_table "liquors", force: :cascade do |t|
    t.string "name"
    t.string "alcohol_content"
    t.string "made_from"
    t.string "origin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "liquor_cocktails", "cocktails", on_delete: :cascade
  add_foreign_key "liquor_cocktails", "liquors", on_delete: :cascade
end
