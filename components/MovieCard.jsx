import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function MovieCard({ id, image, title, vote }) {
  return (
    <div className="col">
      <div className="card">
        <Link to={"/movies/" + id}>
          <img src={image} className="card-img-top movie-poster" alt={title} />
        </Link>
        <div className="card-body">
          <p className="card-text text-center fw-bold fs-5">
            <em>{title}</em>
          </p>
          <div className="text-center">
            <Rating vote={vote} maxVote={5} />
          </div>
        </div>
      </div>
    </div>
  );
}
