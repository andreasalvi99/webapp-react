import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

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
            <InfoCard info={info} />
          </div>
          <div className="col">
            <div className="card h-100 border-primary">
              <div className="card-body text-primary">
                <h5 className="card-title">Recensioni</h5>
                {info.reviews.map((review) => {
                  return (
                    <ul className="list-group my-3" key={review.id}>
                      <ReviewCard
                        name={review.name}
                        date={review.created_at}
                        vote={review.vote}
                        text={review.text}
                      />
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col">
            <ReviewForm />
          </div>
        </div>
      )}
    </>
  );
}
