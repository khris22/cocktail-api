class Api::V1::CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all 
        render json: CocktailSerializer.new(cocktails)
    end

    def show
        cocktail = Cocktail.find(params[:id])
        options = {
            include: [:liquors]
          }
        render json: CocktailSerializer.new(cocktail, options)
    end

    def create
        # current_cocktail.liquors.build(liquor_params)
        binding.pry
        current_liquor = Liquor.find_by(params[:id])
        current_liquor.cocktails.create(cocktails_params)
        # cocktail = Cocktail.create(cocktail_params)
        render json: CocktailSerializer.new(cocktail)
    end

    # def update
    #     cocktail = Cocktail.find(params[:id])
    #     cocktail.update(cocktail_params)
    #     render json: CocktailSerializer.new(cocktail)
    # end

    # def destroy
    #     cocktail = Cocktail.find(params[:id])
    #     cocktail.delete
    #     render json: {cocktailId: cocktail.id}
    # end


    private
    def cocktail_params
        params.require(:cocktail).permit(:name, :flavor, :ingredient, :preparation)
# permit liquors too? :liquors

    end
end
