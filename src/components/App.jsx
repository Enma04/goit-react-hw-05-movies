import { Routes, Route, Link } from "react-router-dom";
import '../index.css';

//-----------------------------------
//------- Components
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

//-----------------------------------
//------- App
export const App = () => {
  return (
    <div className="container">
      <nav className="navBar" >
        <h3 className="titlesH3" > My Movies! </h3>
        <div className="navLinks">
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
