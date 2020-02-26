class Api::V1::CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.ordered_by_name
        render json: cocktails.to_json(include: [:liquors]) 
    end

    def show
        cocktail = Cocktail.find_by(id:params[:id])
        options = {
            include: [:liquors]
          }
        render json: CocktailSerializer.new(cocktail, options)
    end

    def create
        current_liquor = Liquor.find_by_name(params[:liquor])
        cocktail = current_liquor.cocktails.create(cocktail_params)
        render json: CocktailSerializer.new(cocktail)
    end

    # def update
    #     cocktail = Cocktail.find(params[:id])
    #     cocktail.update(cocktail_params)
    #     render json: CocktailSerializer.new(cocktail)
    # end

    def destroy  
        cocktail = Cocktail.find_by(id:params[:id])
        cocktail.destroy
        render json: cocktail
    end

    private

    def cocktail_params
        params.require(:cocktail).permit(:name, :flavor, :ingredient, :preparation, :pic)
    end
    
end
