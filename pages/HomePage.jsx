import axios from "axios";
import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

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
            <InfoCard info={suggestedFilm} />
          </div>
        </div>
      )}
    </>
  );
}
