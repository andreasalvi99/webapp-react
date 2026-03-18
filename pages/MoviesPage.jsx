import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    axios.get("http://localhost:3000/movies").then((response) => {
      setMovies(response.data.results);
    });
  }
  useEffect(fetchMovies, []);

  return (
    <div className="row row-cols-5 g-3">
      {movies.map((movie) => {
        return (
          <MovieCard
            id={movie.id}
            key={movie.id}
            image={movie.image}
            title={movie.title}
            vote={movie.rating}
          />
        );
      })}
    </div>
  );
}
