import { Link } from "react-router-dom";

export default function MovieCard({ id, image, title }) {
  return (
    <div className="col">
      <div className="card" id="card">
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
