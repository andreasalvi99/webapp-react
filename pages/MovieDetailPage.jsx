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
        <div className="row row-cols-2">
          <div className="col">
            <div className="card">
              <img src={info.image} className="card-img-top" alt={info.title} />
              <div className="card-body">
                <p className="card-text">{info.abstract}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recensioni</h5>
                {info.reviews.map((review) => {
                  return (
                    <ul className="list-group my-3" key={review.id}>
                      <li className="list-group-item">Name: {review.name}</li>
                      <li className="list-group-item">{review.vote}/5</li>
                      <li className="list-group-item">{review.text}</li>
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
