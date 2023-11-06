import { useState } from "react";
import PlaylistForm from "./PlaylistForm";

const Playlist = ({playlist, handleDelete, handleEdit}) => {
  const [viewPlaylistForm, setViewPlaylistForm] = useState(false);
  const toggleView = () => {
    setViewPlaylistForm(!viewPlaylistForm);
  };

  return (
    <div className="playlistEditFormView">
      {viewPlaylistForm ? (
        <>
          <PlaylistForm
            playlistDetails={playlist}
            toggleView={toggleView}
            handleSubmit={handleEdit}
          />
          <button onClick={toggleView}>
            {viewPlaylistForm ? "Cancel" : "Edit this playlist"}
          </button>
        </>
      ) : (
        <>
          <h5>{playlist.title} by {playlist.creator}</h5>
          <p> Created: {playlist.creation_year}</p>
          <button onClick={toggleView}>
            {viewPlaylistForm ? "Cancel" : "Edit this playlist"}
          </button>
          <button onClick={() => handleDelete(playlist.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Playlist;
