import { Routes, Route } from "react-router-dom";
import '../index.css';
import { Suspense, lazy } from "react";

//-----------------------------------
//------- Components

//------ Static
import { NavBar } from "./NavBar/NavBar";

//------ Dynamic
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

//-----------------------------------
//------- App
export const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      
    </div>
  );
};
