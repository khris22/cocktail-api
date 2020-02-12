class LiquorCocktail < ApplicationRecord
  belongs_to :liquor
  belongs_to :cocktail
end
