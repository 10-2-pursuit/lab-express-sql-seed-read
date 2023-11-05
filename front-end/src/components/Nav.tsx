import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/songs">Song List</Link>
      </h1>
      <ul>
        <li>
            <Link to="/playlist">Playlist</Link>
        </li>
      </ul>
      <button>
        <Link to="/new">New Song</Link>
      </button>
    </nav>
  );
}
