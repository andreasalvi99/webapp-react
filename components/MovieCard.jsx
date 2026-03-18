import { Link } from "react-router-dom";

export default function MovieCard({ id, image, title }) {
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
        </div>
      </div>
    </div>
  );
}
