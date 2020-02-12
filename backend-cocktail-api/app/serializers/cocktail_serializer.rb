class CocktailSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :flavor, :ingredient, :preparation
  has_many :liquors, through: :liquor_cocktails
end
