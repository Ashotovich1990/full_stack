export const fetchMovies = () => {
    return (
      $.ajax({
          url: '/api/movies',
          method: 'GET',
      })
    );
};

export const fetchMovie = movieId => {
    return (
        $.ajax({
            url: `/api/movies/${movieId}`,
            method: 'get',
        })
    )
};

export const fetchGenre = genreId => {
    return (
        $.ajax({
            url: `/api/genres/${genreId}/movies`,
            method: 'get',
        })
    )
};