class Api::GenresController < ApplicationController
    def index 
        @sample = Genre.includes(:sample_movies)
        @genres = Hash.new 
        @movies = []
        @sample.each do |genre|
            @genres[genre.name] ||= []

            genre.sample_movies.each do |movie|
                @genres[genre.name] += [movie.id]
                @movies += [movie]
            end
        end
        
        render :index
    end

    def show 
        @movies = (Movie.joins(:genres).where(genres: {id: params[:id]}))
        @genres = Hash.new
        if @movies
          movie_ids = @movies.ids
        # @sample = Genre.joins(:movie_lists).where(movie_lists: { movie_id: movie_ids})
          @sample = MovieList.includes(:genre).where( movie_id: movie_ids)
          @sample.each do |movie_list|
            @genres[movie_list.genre.name] ||= []
            @genres[movie_list.genre.name] += [movie_list.movie_id]
          end
        end
        
        render :show
    end

    private 

    # def group_movie_by_genre(genres)
    #     groups = Hash.new 
    #     movies = Hash.new
    #     genres.each do |genre|
    #         groups[genre.name] ||= []

    #         genre.sample_movies.each do |movie|
    #             groups[genre.name] += [movie.id]
    #             movies[movie.id] = movie
    #         end
    #     end
    # end
end

