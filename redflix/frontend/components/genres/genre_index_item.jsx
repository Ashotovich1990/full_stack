import React from 'react';
import MovieListItemContainer from './movies/movie_list_item_container';
import {Link} from 'react-router-dom';
import MovieDropbarContainer from './movies/movie_list_dropbar_container';

class GenreIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hovered: null}
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
  }
  
  onMouseEnterHandle(movie_id) {
    return (e) => {
      this.setState({hovered: movie_id})
    }
  }
  
  onMouseLeaveHandle(e) {
    this.setState({hovered: null})
  }

  render () {
    return (
      <div className="genre">
            <Link id="link-to-new-page"
            onClick={() => this.props.fetchGenre(this.props.genreId)}
            to={`/browse/${this.props.genreId}`}>{this.props.genreName} >></Link>
          <ul className='genre-list'>
            {this.props.movies.map(movie => (<li key={movie.id}
            onMouseEnter={this.onMouseEnterHandle(movie.id)}
            onMouseLeave={this.onMouseLeaveHandle}
            ><MovieListItemContainer genreId={this.props.genreId} hovered={this.state.hovered} content={movie}/></li>))}
          </ul>
          <MovieDropbarContainer genreId={this.props.genreId}/>
      </div>
    );
  }
}

export default GenreIndexItem;

