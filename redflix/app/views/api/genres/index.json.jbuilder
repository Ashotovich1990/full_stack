json.payload do
    json.movies do
        @movies.each do |movie| 
            json.set! movie.id do
            json.extract! movie, :id, :title, :description, :year, :maturity_rating
            end
        end
    end

    json.genres do 
        @movies.each do |movie| 
            movie.genres.each do |genre|
                json.set! genre.id do 
                json.extract! genre, :name
                end
            end
        end
    end
end
