import axios from "axios";
import { useState } from "react";

const initalFormData = {
  name: "",
  vote: "",
  text: "",
};

export default function ReviewForm({ movieId, fetchMovieInfo }) {
  const [formData, setFormData] = useState(initalFormData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log(movieId);
    console.log(formData);

    axios.post(`http://localhost:3000/movies/${movieId}/review`, formData);

    fetchMovieInfo();

    setFormData(initalFormData);
  }

  return (
    <form className="form-control" onSubmit={handleFormSubmit}>
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
        value={formData.text}
        onChange={handleInputChange}
        type="text"
        name="text"
        id="text"
        className="form-control my-3"
        rows="4"
        required
      />
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary ">Invia</button>
      </div>
    </form>
  );
}
