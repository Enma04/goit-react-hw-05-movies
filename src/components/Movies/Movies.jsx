import { Link } from "react-router-dom";

export const Movies = () => {
  return(
    <div>
      <nav className="barraNav">
        <Link className="link" to='/' > Home </Link>
        <Link className="link" to='/movies/:movieId' > Movie Details </Link>
      </nav>
      <span>Estoy en Movies</span>
    </div>
  );
}