class CocktailSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :flavor, :ingredient, :preparation, :liquors
  has_many :liquors, through: :liquor_cocktails
end
