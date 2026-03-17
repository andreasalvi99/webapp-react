import { Link } from "react-router-dom";

export default function MovieCard({ id, image, title, abstract }) {
  return (
    <div className="col">
      <div className="card h-100">
        <Link to={"/movies/" + id}>
          <img src={image} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{abstract}</p>
        </div>
      </div>
    </div>
  );
}
