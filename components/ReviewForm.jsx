import { useState } from "react";

const initalFormData = {
  name: "",
  vote: "",
  abstract: "",
};

export default function ReviewForm() {
  const [formData, setFormData] = useState(initalFormData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form className="form-control">
      <label htmlFor="name" className="form-label">
        Nome
      </label>
      <input
        value={formData.name}
        onChange={handleInputChange}
        //^
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
        value={formData.vote}
        onChange={handleInputChange}
        //^
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
        value={formData.abstract}
        onChange={handleInputChange}
        type="text"
        name="abstract"
        id="abstract"
        className="form-control my-3"
        rows="4"
        required
      />
      <button className="btn btn-primary">Invia</button>
    </form>
  );
}
