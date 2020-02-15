class Api::V1::LiquorCocktailsController < ApplicationController

    def index
        liquor_cocktails = LiquorCocktail.all 
        render json: LiquorCocktailsSerializer.new(liquor_cocktails)
    end

    def show
        liquor_cocktail = LiquorCocktail.find(params[:id])
        options = {
            include: [:cocktail, :liquor]
        }
        render json: LiquorCocktailsSerializer.new(liquor_cocktail, options)
    end

    def create
        binding.pry
        # byebug
        cocktail = Cocktail.find_or_create_by( name: params[:name] ,
            flavor: ,
            ingredient: ,
            preparation: )
        liquor = Liquor.find_or_create_by( name:  ,
            alcohol_content: ,
            made_from: ,
            origin: )
        liquor_cocktail = LiquorCocktail.create(cocktail_id: cocktail.id , liquor_id: liquor.id)

        render json: {
            cocktail: CocktailSerializer.new(cocktail),
            liquor:  LiquorSerializer.new(liquor),
            liquor_cocktail: LiquorCocktailsSerializer.new(liquor_cocktail)
        }
    end
end
