// MovieDetail.js

import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="links">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default MovieDetail;
