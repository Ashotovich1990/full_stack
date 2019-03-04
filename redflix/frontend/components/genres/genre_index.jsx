import React from 'react';
import GenreIndexItem from './genre_index_item';

class GenreIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.genreId) {
          this.props.fetchGenre(this.props.genreId);
        } else {
          this.props.fetchGenres();
        }
    }

    componentDidUpdate() {
       this.props.receiveDropDownMovie(null, null)
    }

    componentWillUnmount() {
        if (this.props.genreId) {
          this.props.fetchGenre(this.props.genreId);
        } else {
          this.props.fetchGenres();
        }
    }

    render() {
        const genreNames = Object.keys(this.props.genreLists).map((key) => (
        <GenreIndexItem
        key={key} 
        fetchGenre ={this.props.fetchGenre}
        genreId={key}
        genreName={this.props.genreNames[key]} 
        movies={this.props.genreLists[key].map(movie_id => this.props.movies[movie_id])} />
        )
        )
        
        return (
         <div className="genre-container">
               {genreNames}
         </div>
        );
    }
}

export default GenreIndex;