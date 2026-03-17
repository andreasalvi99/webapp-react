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
        <div className="row row-cols-3">
          <div className="col">
            <div className="card h-100">
              <img src={info.image} className="card-img-top" alt={info.title} />
              <div className="card-body">
                <p className="card-text">{info.abstract}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-primary">
              <div className="card-body text-primary">
                <h5 className="card-title">Recensioni</h5>
                {info.reviews.map((review) => {
                  return (
                    <ul className="list-group my-3" key={review.id}>
                      <li className="list-group-item">
                        <i className="bi bi-person-circle"></i>
                        <span className="mx-2">{review.name}</span>
                        <span className="d-block"></span>
                      </li>
                      <li className="list-group-item">
                        Voto: <span className="d-block">{review.vote}/5</span>
                      </li>
                      <li className="list-group-item">
                        Commento: <span className="d-block">{review.text}</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
