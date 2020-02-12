class LiquorsController < ApplicationController

    def index
        @liquors = Liquor.all
        render json: @liquors
    end
end
