class LiquorCocktailsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :liquor, :cocktail
  belongs_to :liquor
  belongs_to :cocktail
end
