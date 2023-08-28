import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "resources/moviesData";

const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function newMovie() {
      const data = await getMovie(id);
      //console.log("Llego la data:", data);
      setMovie(data);
    }
    newMovie();
  }, []);

  return(
    <div className="movieCard">
      <h4 className="titlesH4"> { movie.title } </h4>
      <span className="text" > {movie.overview} </span>
      <img
        src={`${imageBaseURL}${movie.backdrop_path}`}
        alt="Aqui va una imagen"
        className="imgMovie"
      />
    </div>
  );
}