import React from 'react';
// import MovieDropbarContainer from './movie_list_dropbar_container';

class MovieListItem extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            width: '200px',
            height: "280px",
            backgroundImage: "url(" + this.props.content.poster + ")",
            backgroundSize: 'cover',
            alignItems: 'stretch',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.receiveDropDownMovie(this.props.content.id, this.props.genreId)
    }
    
    render() {
        if (this.props.hovered === this.props.content.id) {
        return  (
        <div>
            <div style={this.style}>
              <div className="movie-list-item-content">
                <div className="movie-item-bar">
                  <div id={`maturity-rating-${this.props.content.maturity_rating}`}>{this.props.content.maturity_rating}</div>
                  <div id="movie-year">{this.props.content.year}</div>
                </div>
                <div  id="movie-title">{this.props.content.title}</div>
                <div id="open-dropdown-movie" onClick={this.handleClick}>More Info</div>
              </div>
            </div>
        </div>
        )
        } else {
        return <img src={this.props.content.poster} alt=""></img>
        }
    }   
};

export default MovieListItem;