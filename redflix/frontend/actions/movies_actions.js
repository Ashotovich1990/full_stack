import * as MovieApiUtil from '../util/movies_api_util'

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveMovies = payload => {
    return (
    {
    type: RECEIVE_MOVIES,
    payload,
})
}

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie,
})

export const fetchMovies = () => dispatch => (
    MovieApiUtil.fetchMovies()
    .then(res => dispatch(receiveMovies(res)))
)

export const fetchGenre = (genreId) => dispatch => (
    MovieApiUtil.fetchGenre(genreId)
    .then(res => dispatch(receiveMovies(res)))
)

export const fetchMovie = movieId => dispatch => (
    MovieApiUtil.fetchMovie(movieId)
    .then(res => dispatch(receiveMovie(res)))
)