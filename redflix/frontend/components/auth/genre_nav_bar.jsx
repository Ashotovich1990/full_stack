import React from 'react';
import {Link} from 'react-router-dom';

export const GenreNavBar = props => (
    <div className="genre-nav-bar">
      <Link to={`/browse/${1}`}>Trending Now</Link>
      <Link to={`/browse/${2}`}>New Releases</Link>
      <Link to={`/browse/${0}`}>My List</Link>
    </div>
);
