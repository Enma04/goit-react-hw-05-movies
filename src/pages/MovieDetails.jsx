import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
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
  }, [id]);

  return(
    <div className="movieCard">
      <h4 className="titlesH4"> { movie.title } </h4>
      <span className="text" > {movie.overview} </span>
      <img
        src={`${imageBaseURL}${movie.backdrop_path}`}
        alt="Aqui va una imagen"
        className="imgMovie"
      />
      <ul className="otherDetails">
        <li>
          <Link to="cast" > Cast </Link>
        </li>
        <li>
          <Link to="reviews"> Reviews </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}