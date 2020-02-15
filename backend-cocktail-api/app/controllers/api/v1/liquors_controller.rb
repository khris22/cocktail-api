class Api::V1::LiquorsController < ApplicationController

    def index
        liquors = Liquor.all
        render json: LiquorSerializer.new(liquors)
    end

    def show
        liquor = Liquor.find(params[:id])
        options = {
            include: [:cocktails]
          }
        render json: LiquorSerializer.new(liquor, options)
    end

    def create
        liquor = Liquor.create(liquor_params)
        render json: LiquorSerializer.new(liquor)
    end

    # def update
    #     liquor = Liquor.find(params[:id])
    #     liquor.update(liquor_params)
    #     render json: LiquorSerializer.new(liquor)
    # end
    
    # def destroy
    #     liquor = Liquor.find(params[:id])
    #     liquor.delete
    #     render json: {liquorId: liquor.id}
    # end

    private
    
    def liquor_params
        params.require(:liquor).permit(:name, :alcohol_content, :made_from, :origin)
    end

end


