import { Link } from "react-router-dom";

export default function MovieCard({ id, image, title }) {
  return (
    <div className="col">
      <div className="card h-100">
        <Link to={"/movies/" + id}>
          <img
            src={image}
            className="card-img-top object-fit-cover"
            alt={title}
          />
        </Link>
      </div>
    </div>
  );
}
