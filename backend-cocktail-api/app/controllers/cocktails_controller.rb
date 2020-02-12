class CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all 
        render json: CocktailSerializer.new(cocktails)
    end
end
