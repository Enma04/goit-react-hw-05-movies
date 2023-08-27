import { allMovies } from "resources/moviesData";
import '../index.css';

export const App = () => {

  allMovies()
    .then(data => console.log("Incoming Data: ", data))
    .catch(err => console.log("Incoming", err))

  return (
    <div className="container">
      React homework template
    </div>
  );
};
