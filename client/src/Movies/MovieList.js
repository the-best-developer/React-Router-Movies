import React, { Component } from 'react';
import MovieCard from './MovieCard'
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
          <MovieCard key={movie.id} movie={movie} selectedMovie={false} clickHandler={_ => this.goToMovie(movie)}/>
        ))}
      </div>
    );
  }
}
