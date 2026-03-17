import axios from "axios";
import { useEffect, useState } from "react";

export default function () {
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    axios.get("http://localhost:3000/movies").then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }
  useEffect(fetchMovies, []);

  return (
    <div className="row row-cols-5 g-3">
      {movies.map((movie) => {
        return (
          <div className="col">
            <div class="card h-100">
              <img src={movie.image} class="card-img-top" alt={movie.title} />
              <div class="card-body">
                <h5 class="card-title">{movie.title}</h5>
                <p class="card-text">{movie.abstract}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
