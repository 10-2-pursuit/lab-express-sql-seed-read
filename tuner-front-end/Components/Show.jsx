import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Playlists from "./Playlists";
const API = import.meta.env.VITE_BASE_URL;

const Show = () => {
  const [song, setSong] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
    .then((res) => {
      if (!res.ok) {
        navigate("/404");
      }
      return res.json();
    })
      .then((song) => {
        setSong(song);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, navigate]);

  const handleDelete = () => {
    deleteSong();
  };

  const deleteSong = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/songs/${id}`, httpOptions)
      .then(() => {
        alert(`${song.name} was deleted!`);
        navigate(`/songs`)})
      .catch((error) => console.log(error));
  };

  return (
    <div className="showSong">
      <article>
        <h3>
          {song.name} by {song.artist}
        </h3>
        <h4>Album: {song.album}</h4>
        <h5>Time: {song.time} mins</h5>
        <h5>Favorite Song: {song.is_favorite ? (<span>♯</span>) : (<span>♭</span>)}</h5>
        <div className="showNavigation">
          <div>
            <Link to={`/songs`}>
              <button>Cancel</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <hr />
      </article>
        <Playlists/>
    </div>
  );
};

export default Show;
