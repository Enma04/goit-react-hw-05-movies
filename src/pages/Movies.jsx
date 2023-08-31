import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovie } from 'resources/moviesData';

export const Movies = () => {
  const [state, setState] = useState({ data:{}, query:'' });

  useEffect(() => {
    console.log('Mi data: ', state.data);
  }, [state.data]);

  useEffect(() => {
    console.log('Mi consulta: ', state.query);
    const handleSearch = async () => {
      const info = await searchMovie();
      setState(state => ({
        ...state,
        data: info.results,
      }));
    };
    handleSearch();
  }, [state.query]);

  const handleSubmit = e => {
    e.preventDefault();
    setState({
      ...state, query:e.target[0].value
    });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input className="formInput" type="text" name="username" />
        <button className="formButton" type="submit">
          Search
        </button>
      </form>

      {/* <ul className="movieNameList">
        {
          state.data.map( movie => (
            <li key={movie.id} className="movie" >
              <Link to={`/movies/${movie.id}`} className="movieLink" >
                { movie.title ? movie.title : movie.name }
              </Link>
            </li>
          ))
        }
      </ul> */}
    </>
  );
};
