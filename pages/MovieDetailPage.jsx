import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [info, setInfo] = useState();
  useEffect(fetchMovieInfo, [id]);

  function fetchMovieInfo() {
    axios.get(`http://localhost:3000/movies/${id}`).then((response) => {
      console.log(response.data.results);
      setInfo(response.data.results);
    });
  }

  return <></>;
}
