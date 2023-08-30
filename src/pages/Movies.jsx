export const Movies = () => {
  const handleSubmit = () => {}
  return(
    <form className="form" onSubmit={handleSubmit}>
      <input className="formInput" type="text" name="username" />
      <button className="formButton" type="submit">Search</button>
    </form>
  );
}