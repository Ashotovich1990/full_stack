
    json.extract! @movie, :id, :title, :description, :year, :maturity_rating
    if @movie.photo.attached?
        json.poster url_for(@movie.photo)
    end

