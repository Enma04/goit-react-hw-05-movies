import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovie } from "resources/moviesData";

const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  console.log("Locacion: ", location);
  
  useEffect(() => {
    async function newMovie() {
      const data = await getMovie(id);
      setMovie(data);
    }
    newMovie();
  }, [id]);

  return(
    <div className="movieCard">
      <Link to={location.state.from}>Back to movies</Link>
      <h4 className="titlesH4"> { movie.title } </h4>
      <span className="text" > {movie.overview} </span>
      <img
        src={`${imageBaseURL}${movie.backdrop_path}`}
        alt="Aqui va una imagen"
        className="imgMovie"
      />
      <ul className="otherDetails">
        <li>
          <Link to="cast" className="movieLink" > Cast </Link>
        </li>
        <li>
          <Link to="reviews" className="movieLink"> Reviews </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}