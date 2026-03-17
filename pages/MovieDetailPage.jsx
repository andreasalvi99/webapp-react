import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [info, setInfo] = useState();
  useEffect(fetchMovieInfo, [id]);

  function fetchMovieInfo() {
    axios.get(`http://localhost:3000/movies/${id}`).then((response) => {
      setInfo(response.data.results);
    });
  }

  return (
    <>
      {info && (
        <div className="d-flex gap-3">
          <div className="card">
            <img src={info.image} className="card-img-top" alt={info.title} />
            <div className="card-body">
              {/* <p className="card-text">{info.abstract}</p> */}
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recensioni</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
