import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top border-bottom">
      <h1 className="navLink">
        <Link to="/songs" style={{color:"#DFB6B2"}}>Tuner App</Link>
      </h1>
      <button className="navLink">
        <Link to="/songs/new" style={{color:"#2B124C"}}>Add New Song</Link>
      </button>
    </nav>
  );
};

export default NavBar;
