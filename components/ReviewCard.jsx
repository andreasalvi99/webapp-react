export default function ReviewCard({ review }) {
  return (
    <>
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
    </>
  );
}
