import React from 'react';

const MovieCard = props => {

    if (!props.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = props.movie;
    
    return (
      <div 
        className={ (props.selectedMovie) ? "save-wrapper" : "movie-container"}
        onClick={ (props.clickHandler) && props.clickHandler }
      >
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        { (props.selectedMovie) && (<div className="save-button">Save</div>) }
      </div>
    );
};

export default MovieCard;
