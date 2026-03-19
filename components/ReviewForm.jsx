export default function ReviewForm() {
  return (
    <form className="form-control">
      <label htmlFor="name" className="form-label">
        Nome
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control my-3"
        required
      />
      <label htmlFor="vote" className="form-label">
        Voto
      </label>
      <input
        type="number"
        name="vote"
        id="vote"
        className="form-control my-3"
        min={1}
        max={5}
        required
      />
      <label htmlFor="abstract" className="form-label">
        Descrizione
      </label>
      <textarea
        type="text"
        name="abstract"
        id="abstract"
        className="form-control my-3"
        rows="4"
        required
      />
    </form>
  );
}
