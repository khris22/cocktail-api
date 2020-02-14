class Api::V1::CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all 
        render json: CocktailSerializer.new(cocktails)
    end

    def show
        cocktail = Cocktail.find(params[:id])
        render json: CocktailSerializer.new(cocktail)
    end

    def create
        cocktail = Cocktail.create(cocktail_params)
        render json: CocktailSerializer.new(cocktail)
    end

    def update
        cocktail = Cocktail.find(params[:id])
        cocktail.update(cocktail_params)
        render json: CocktailSerializer.new(cocktail)
    end

    def destroy
        cocktail = Cocktail.find(params[:id])
        cocktail.delete
        render json: {cocktailId: cocktail.id}
    end


    private
    def cocktail_params
        params.require(:cocktail).permit(:name, :flavor, :ingredient, :preparation)
    end
end
