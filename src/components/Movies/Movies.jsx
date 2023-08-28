import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allMovies } from "resources/moviesData";

export const Movies = () => {
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
    <div>
      <ul>
        { movies.map( movie => (
            <li key={movie.id} className="movie" >
              <Link to={`${movie.id}`}>
                { movie.title ? movie.title : movie.name }
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}