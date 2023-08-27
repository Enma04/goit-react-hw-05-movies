import { allMovies } from "resources/moviesData";

export const App = () => {

  allMovies()
    .then(data => console.log("Incoming Data: ", data))
    .catch(err => console.log("Incoming", err))

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
