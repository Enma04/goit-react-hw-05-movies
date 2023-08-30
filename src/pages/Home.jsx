import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allMovies } from "resources/moviesData";

export const Home = () => {
  const [movies, setMovies] = useState([]);

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
              <Link to={`/movies/${movie.id}`} className="movieLink" >
                { movie.title ? movie.title : movie.name }
              </Link>
            </li>
        ))}
      </ul>
    </>
  );
}