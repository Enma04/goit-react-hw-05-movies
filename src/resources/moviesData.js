const myKeyTMDB = "d6590e454f1a3c036ac38972d9d76775";
const url = "https://api.themoviedb.org/3/movie/";


/*
  -----------------------------------------
  Load all movies in Home page
  -----------------------------------------
*/
export const allMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjU5MGU0NTRmMWEzYzAzNmFjMzg5NzJkOWQ3Njc3NSIsInN1YiI6IjY0ZTk2M2M2ZWE4OWY1MDExZGM4NGQ5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vsMxFL9CS1dwriiW_wnIpHxml4jrYvwbLkmdkrYIZB8'
    }
  };

  return fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    .then(response => {
      //console.log("backend response: ", response);
      if(!response.ok) {
        throw new Error(response.status); 
      }
      return response.json();
    });
}


/*
  -----------------------------------------
  Charged selected movie
  -----------------------------------------
*/
export const getMovie = (id, option='') => {
  return fetch(`${url}${id}${option}?api_key=${myKeyTMDB}`).then(response => {
    if(!response.ok) {
      throw new Error(response.status); 
    }
    return response.json();
  });
  //'https://api.themoviedb.org/3/movie/11?api_key=d6590e454f1a3c036ac38972d9d76775'
}


/*
  -----------------------------------------
  Search a movie by query
  -----------------------------------------
*/
export const searchMovie = (query = 'batman') => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjU5MGU0NTRmMWEzYzAzNmFjMzg5NzJkOWQ3Njc3NSIsInN1YiI6IjY0ZTk2M2M2ZWE4OWY1MDExZGM4NGQ5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vsMxFL9CS1dwriiW_wnIpHxml4jrYvwbLkmdkrYIZB8'
    }
  };
  
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${myKeyTMDB}&query=${query}&include_adult=false&language=en-US&page=1`, options)
    .then(response => {
      if(!response.ok) throw new Error(response.status);
      return response.json();
    });
}