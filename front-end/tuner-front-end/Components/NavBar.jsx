import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-link">
        <Link to="/songs">Tuner App</Link>
      </h1>
      <button className="nav-link">
        <Link to="/songs/new">Add New Song</Link>
      </button>
    </nav>
  );
};

export default NavBar;
