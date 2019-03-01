import React from 'react';

class GenreIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        const genreNames = Object.values(this.props.genreNames).map((el,idx) => <li key={idx}>{el}</li>)
        return (
         <div>
            <ul className="genre-names">
               {genreNames}
            </ul>
         </div>
        );
    }
}

export default GenreIndex;