import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "Dom Cobb est un voleur expérimenté, le meilleur dans l'art dangereux de l'extraction : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable...",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 8.8,
      trailerURL: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description:
        "Dans un futur proche, face à une Terre exsangue, un groupe d'explorateurs utilise un vaisseau interstellaire pour franchir un trou de ver permettant de parcourir des distances jusque-là infranchissables. Leur but : trouver un nouveau foyer pour l'humanité.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rating: 8.6,
      trailerURL: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9.0,
      trailerURL: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
        <MovieList movies={movies} addMovie={addMovie} />
      </div>
    </Router>
  );
}

export default App;
