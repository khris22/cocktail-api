class Api::V1::LiquorCocktailsController < ApplicationController

    def index
        liquor_cocktails = LiquorCocktail.all 
        render json: LiquorCocktailsSerializer.new(liquor_cocktails)
    end

    def show
        liquor_cocktail = LiquorCocktail.find(params[:id])

        # render json: LiquorCocktailsSerializer.new(liquor_cocktail)
    end

end
