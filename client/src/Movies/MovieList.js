import React, { Component } from 'react';
import axios from 'axios';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  goToMovie (movie) {
    this.props.history.push(`/movies/${movie.id}`)
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} clickHandler={_ => this.goToMovie(movie)} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie, clickHandler }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <div className="movie-card" onClick={clickHandler}>
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
  );
}
