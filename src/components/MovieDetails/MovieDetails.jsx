import { Link } from "react-router-dom";

export const MovieDetails = () => {
  return(
    <div>
      <nav className="barraNav">
        <Link className="link" to='/' > Home </Link>
        <Link className="link" to='/movies' > Movies </Link>
      </nav>
      <span>Estoy en Movie Details</span>
    </div>
  );
}