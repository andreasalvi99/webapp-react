export default function MovieCard({ image, title, abstract }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{abstract}</p>
        </div>
      </div>
    </div>
  );
}
