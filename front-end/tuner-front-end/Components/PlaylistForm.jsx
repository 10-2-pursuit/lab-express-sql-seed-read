import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlaylistForm = (playlistDetails, handleSubmit, toggleView, children) => {
  let { id } = useParams();

  const [playlist, setPlaylist] = useState({
    title: "",
    creator: "",
    creation_year: "",
    song_id: id,
  });

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (playlistDetails) {
      setPlaylist(playlistDetails);
    }
  }, [id, playlistDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(playlist, id);
    if (playlistDetails) {
      toggleView();
    }
    setPlaylist({
      title: "",
      creator: "",
      creation_year: "",
      song_id: id,
    });
  };

  return (
    <div className="editPlaylist">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={playlist.title}
          onChange={handleTextChange}
        />
        <label htmlFor="creator">Name:</label>
        <input
          id="creator"
          value={playlist.creator}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="creation_year">Year of Creation:</label>
        <input
          id="creation_year"
          type="number"
          name="year"
          placeholder="Year playlist created"
          value={playlist.creation_year}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PlaylistForm;
