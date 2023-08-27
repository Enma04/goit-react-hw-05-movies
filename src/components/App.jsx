import { allMovies } from "resources/moviesData";
import { Routes, Route } from "react-router-dom";
import '../index.css';

//-----------------------------------
//------- Components
import { Home } from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { NotFound } from "./NotFound/NotFound";

//-----------------------------------
//------- App
export const App = () => {
  allMovies()
    .then(data => console.log("Incoming Data: ", data))
    .catch(err => console.log("Incoming", err))

  return (
    <div className="container">
      React homework template
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/movies/:movieId" element={ <MovieDetails /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
