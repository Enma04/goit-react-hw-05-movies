import { Routes, Route } from "react-router-dom";
import '../index.css';

//-----------------------------------
//------- Components
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { NotFound } from "../pages/NotFound";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { NavBar } from "./NavBar/NavBar";

//-----------------------------------
//------- App
export const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/goit-react-hw-05-movies" element={ <Home/> } />
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
