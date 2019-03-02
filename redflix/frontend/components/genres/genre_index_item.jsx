import React from 'react';

export const GenreIndexItem = props => (
    <div className="genre">
          <h1>{props.genreName}</h1>
        <ul className='genre-list'>
          {props.movies.map(movie => <li><img src={movie.poster} alt=""/></li>)}
        </ul>
    </div>
)

