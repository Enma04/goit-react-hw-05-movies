import { Link } from "react-router-dom";

export const NotFound = () => {
  return(
    <div>
      <nav className="barraNav">
        <Link className="link" to='/' > Home </Link>
      </nav>
      <span>Ups algo salió mal, Error 404!</span>
    </div>
  );
}