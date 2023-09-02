import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar" >
      <h3 className="titlesH3" > My Movies! </h3>
      <div className="navLinks">
        <Link className="link" to='/' > Home </Link>
        <Link className="link" to='/movies' > Movies </Link>
      </div>
    </nav>
  );
}