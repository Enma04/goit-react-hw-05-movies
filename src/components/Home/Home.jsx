import { Link } from "react-router-dom";

export const Home = () => {
  return(
    <div>
      <nav className="barraNav">
        <Link className="link" to='/movies' > Movies </Link>
      </nav>
      <span>Estoy en el Home</span>
    </div>
  );
}