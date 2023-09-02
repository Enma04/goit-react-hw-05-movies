import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from 'resources/moviesData';
import css from './Cast.module.css';

const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function newCast() {
      const data = await getMovie(id, '/credits');
      setCast(data.cast);
    }
    newCast();
  }, [id]);

  return (
    <ul className={css.list}>
      {cast.map(person => (
        <li key={person.id} className={css.card}>
          <img
            src={`${imageBaseURL}${person.profile_path}`}
            alt="Not found"
            className={css.imagen}
          />
          <span className={css.text}> Name: {person.name} </span>
          <span className={css.text}> Character: {person.character} </span>
        </li>
      ))}
    </ul>
  );
};
