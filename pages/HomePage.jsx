import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [suggestedFilm, setSuggestedFilm] = useState();
  useEffect(() => {
    async function fetchSuggestedFilm() {
      const moviesResponse = await axios.get("http://localhost:3000/movies");

      const movies = moviesResponse.data.results;
      console.log(movies);

      const randomNum = Math.floor(Math.random() * movies.length);
      setSuggestedFilm(movies[randomNum]);
    }

    fetchSuggestedFilm();
  }, []);

  return (
    <>
      {suggestedFilm && (
        <div className="row row-cols-3">
          <div className="col">
            <Link to={"/movies/" + suggestedFilm.id}>
              <div className="card">
                <img
                  src={suggestedFilm.image}
                  className="card-img-top"
                  alt={suggestedFilm.title}
                />
              </div>
            </Link>
          </div>
          <div className="col">
            <div className="card border-dark mb-3">
              <div className="card-header">{suggestedFilm.title}</div>
              <div className="card-body">
                <h5 className="card-title">{suggestedFilm.title}</h5>
                <p className="card-text">{suggestedFilm.description}</p>
                <p className="card-text">
                  <Rating vote={suggestedFilm.rating} maxVote={5} />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
