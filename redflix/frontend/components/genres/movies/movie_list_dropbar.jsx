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
              <div id='movie-ad' className="movie-dropbar">
               <div className='dropbar-info-container'>
                 <div id="movie-dropbar-title">{movie.title}</div>
                 <div id="movie-dropbar-description">{movie.description}</div>
                 <div className='dropdown-buttons'>
                    <div id='add-movie-button' onClick={this.handleAdd}>Add Move</div>
                    <div id='remove-movie-button' onClick={this.handleRemove}>Remove Move</div>
                 </div>
                </div>
                <div className='dropbar-poster-container'>
                    <img id='dropdown-poster' src={movie.poster}/>
                    <div id='dropdown-close' onClick={this.handleClose}><i class="fas fa-times"></i></div>
                </div>
              </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default MovieDropbar;