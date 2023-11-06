import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const New = () => {
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

  const addSong = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`${API}/songs`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`${song.name} was added to the list!`);
        navigate("/songs");
      })
      .catch((error) => {
        console.error("Error adding data.", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="newSong">
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

        <button type="submit" className="newButton">
          Create Song
        </button>
      </form>
    </div>
  );
};

export default New;
