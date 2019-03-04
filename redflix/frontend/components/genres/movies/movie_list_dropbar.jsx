import React from 'react';

class MovieDropbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: true}
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleClose() {
      this.props.receiveDropDownMovie(null,null);
    }

    handleAdd() {
        this.props.addMovie(this.props.dropDownMovie.movieId)
    }

    handleRemove() {
        this.props.removeMovie(this.props.dropDownMovie.movieId)
    }

    render() {
        const movie = this.props.movies[this.props.dropDownMovie.movieId]
          if ( movie && (this.props.genreId === this.props.dropDownMovie.genreId)) {
            return (
              <div className="movie-dropbar">
                <div id="movie-dropbar-description">{movie.description}</div>
                <img id="movie-dropbar-poster" src={movie.poster}/> 
                <div onClick={this.handleClose}>Close</div>
                <div onClick={this.handleAdd}>Add Move</div>
                <div onClick={this.handleRemove}>Add Move</div>
              </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default MovieDropbar;