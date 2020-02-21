class Api::V1::CocktailsController < ApplicationController

    def index
        # Option2
        cocktails = Cocktail.all
        render json: cocktails.to_json(include: [:liquors]) 
        
        # Option1 Using Fast Json Serializer
        # cocktails = Cocktail.all
        # options = {
        #     include: [:liquors]
        #   }
        # render json: CocktailSerializer.new(cocktails, options)
    end

    def show
        cocktail = Cocktail.find(params[:id])
        options = {
            include: [:liquors]
          }
        render json: CocktailSerializer.new(cocktail, options)
    end

    def create
        # Option1 - Using FastJson serializer
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

        # Option2
        # cocktail = Cocktail.find_by(id:params[:id])
        # render json: cocktail
        # Cocktail.destroy(cocktail.id)
    end

    private

    def cocktail_params
        params.require(:cocktail).permit(:name, :flavor, :ingredient, :preparation, :pic)
    end
    
end
