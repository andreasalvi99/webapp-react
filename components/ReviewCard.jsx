import Dating from "./Dating";
import Rating from "./Rating";

export default function ReviewCard({ date, vote, text, name }) {
  return (
    <>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between mb-3">
            <div>
              <i className="bi bi-person-circle"></i>
              <span className="mx-2">{name}</span>
            </div>
            <Dating date={date} />
          </div>
          <p className="mb-3">
            <em>
              <span className="d-block">"{text}"</span>
            </em>
          </p>
          <small>
            <Rating vote={vote} maxVote={5} />
          </small>
        </a>
      </div>
    </>
  );
}
