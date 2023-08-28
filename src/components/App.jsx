import { Routes, Route, Link } from "react-router-dom";
import '../index.css';

//-----------------------------------
//------- Components
import { Home } from "./Home/Home";
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { NotFound } from "./NotFound/NotFound";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

//-----------------------------------
//------- App
export const App = () => {
  return (
    <div className="container">
      <nav className="navBar" >
        <h3 className="titlesH3" > My Movies! </h3>
        <div>
          <Link className="link" to='/' > Home </Link>
          <Link className="link" to='/movies' > Movies </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/movies" element={ <Movies/> } />
        <Route path="/movies/:id" element={ <MovieDetails/> } >
          <Route path="cast" element={ <Cast/> } />
          <Route path="reviews" element={ <Reviews/> } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
};
