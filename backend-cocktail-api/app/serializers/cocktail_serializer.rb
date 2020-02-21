class CocktailSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :flavor, :ingredient, :preparation, :pic, :liquors
  has_many :liquors, through: :liquor_cocktails
end
