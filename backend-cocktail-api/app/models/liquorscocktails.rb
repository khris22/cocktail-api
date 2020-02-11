class LiquorsCocktails < ApplicationRecord
    belongs_to :liquor 
    belongs_to :cocktail
end
