import { allMovies } from "resources/moviesData";
import { Routes, Route, Link } from "react-router-dom";
import '../index.css';

//-----------------------------------
//------- Components
import { Home } from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";

//-----------------------------------
//------- App
export const App = () => {
  allMovies()
    .then(data => console.log("Incoming Data: ", data))
    .catch(err => console.log("Incoming", err))

  return (
    <div className="container">
      React homework template
      <nav className="barraNav">
        <Link className="link" to='/' > Home </Link>
        <Link className="link" to='/movies' > Movies </Link>
        <Link className="link" to='/movie-details' > Movie Details </Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/movie-details" element={ <MovieDetails /> } />
      </Routes>
    </div>
  );
};
