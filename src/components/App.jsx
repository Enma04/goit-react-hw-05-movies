export const App = () => {
  const myKeyTMDB = "d6590e454f1a3c036ac38972d9d76775";
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjU5MGU0NTRmMWEzYzAzNmFjMzg5NzJkOWQ3Njc3NSIsInN1YiI6IjY0ZTk2M2M2ZWE4OWY1MDExZGM4NGQ5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vsMxFL9CS1dwriiW_wnIpHxml4jrYvwbLkmdkrYIZB8'
    }
  };
  
  const data = fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
  console.log("Mi data: ", data);

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
