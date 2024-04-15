import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>Rating: {movie.rating}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
