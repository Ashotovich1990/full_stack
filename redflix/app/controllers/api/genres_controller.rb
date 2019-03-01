class Api::GenresController < ApplicationController
    def index 
          @movies = Movie.all
          render 'api/movies/index' 
    end

    def show 
        @movies = Movie.joins(:genres).where(genres: {id: params[:id]}).includes(:genres)
        render 'api/movies/index'
    end
end

