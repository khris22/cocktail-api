class Api::V1::CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all 
        # Option1 Using Fast Json Serializer
        # options = {
        #     include: [:liquors]
        #   }
        # render json: CocktailSerializer.new(cocktails, options)

        # Option2
        render json: cocktails.to_json(include: [:liquors])



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
        # cocktail = Cocktail.create(cocktail_params)
        render json: CocktailSerializer.new(cocktail)

        # Option2 Custom




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
    # def cocktail_params
    #     params.require(:cocktail).permit(:name, :flavor, :ingredient, :preparation, :pic)
    def cocktail_params
        params.require(:cocktail).permit(:name, :flavor, :ingredient, :preparation, :pic)

    end
end
