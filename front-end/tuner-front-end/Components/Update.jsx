import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const Update = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const updateSong = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/songs/${id}`, httpOptions)
      .then(() => {
        alert(`${song.name} has been updated!`);
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error(error));
  };

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
      .catch(() => navigate("/404"));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  } 

  return (
    <div className="editSong">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          onChange={handleTextChange}
          placeholder="Name of Artist"
          required
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          placeholder="Album Name"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          onChange={handleTextChange}
          placeholder="Length of Song (00:00)"
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default Update;
