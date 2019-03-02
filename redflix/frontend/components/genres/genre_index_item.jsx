import React from 'react';

export const GenreIndexItem = props => (
    <div>
          <h1>{props.genreName}</h1>
        <ul>
          {props.movies.map(movie => <li>{movie.title}</li>)}
        </ul>
    </div>
)

