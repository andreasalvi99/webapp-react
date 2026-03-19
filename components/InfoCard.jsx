export default function InfoCard({ info }) {
  return (
    <div className="card h-100 text-bg-dark">
      <img src={info.image} className="card-img-top" alt={info.title} />
      <div className="card-body">
        <p className="card-text text-center">{info.abstract}</p>
      </div>
    </div>
  );
}
