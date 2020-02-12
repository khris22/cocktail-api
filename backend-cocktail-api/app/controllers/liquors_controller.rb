class LiquorsController < ApplicationController

    def index
        liquors = Liquor.all
        render json: LiquorSerializer.new(liquors)
    end
end
