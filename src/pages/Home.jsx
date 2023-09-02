import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { allMovies } from "resources/moviesData";

export default function Home () {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect( () => {
    async function fetchMovies() {
      try {
        const data = await allMovies();
        setMovies(data.results);
      }
      catch (error) {
        console.log("Ups!", error);
      }
    }
    fetchMovies();
  }, []);
  
  return(
    <>
      <h4 className="titlesH4">On Demand</h4>
      <ul className="movieNameList">
        { movies.map( movie => (
            <li key={movie.id} className="movie" >
              <Link to={`/movies/${movie.id}`} state={{ from: location }} className="movieLink" >
                { movie.title ? movie.title : movie.name }
              </Link>
            </li>
        ))}
      </ul>
    </>
  );
}