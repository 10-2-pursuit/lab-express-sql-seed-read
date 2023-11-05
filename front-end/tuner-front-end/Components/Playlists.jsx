import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Playlist from "./Playlist";
import PlaylistForm from "./PlaylistForm";
const API = import.meta.env.VITE_BASE_URL;

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API}/songs/${id}/playlists`)
      .then((res) => res.json())
      .then((resJSON) => {
        setPlaylists(resJSON.allPlaylists)
      })
      .catch((error) => console.error("API request failed:", error));
  }, [id, API]);

  const handleAdd = (newPlaylist) => {
    fetch(`${API}/songs/${id}/playlists`, {
      method: "POST",
      body: JSON.stringify(newPlaylist),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((resJSON) => {
        setPlaylists([...playlists, resJSON]);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (playlistId) => {
    fetch(`${API}/songs/${id}/playlists/${playlistId}`, { method: "DELETE" })
      .then((res) => {
        const copyPlaylistsArr = [...playlists];
        const deletedPlaylistIndex = copyPlaylistsArr.findIndex((playlist) => {
           playlist.id === playlistId;
        });
        copyPlaylistsArr.splice(deletedPlaylistIndex, 1);
        setPlaylists(copyPlaylistsArr);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (updatedPlaylist) => {
    fetch(`${API}/songs/${id}/playlists/${updatedPlaylist.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedPlaylist),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((resJSON) => {
        const copyPlaylistsArr = [...playlists];
        const updatedPlaylistIndex = copyPlaylistsArr.findIndex(playlist => {
         return playlist.id === updatedPlaylist.id;
        });
        copyPlaylistsArr[updatedPlaylistIndex] = resJSON;
        setPlaylists(copyPlaylistsArr);
      })
      .catch((error) => {
        console.error("Error updating playlist:", error);
      });
  };
  

  return (
    <section className="Playlists">
      <h3>Playlists that contain this song</h3>
      <PlaylistForm handleSubmit={handleAdd}>
        <h4>Add a new Playlist</h4>
      </PlaylistForm>
      {playlists.map((playlist) => (
        <Playlist
          key={playlist.id}
          id={playlist.id} 
          playlist={playlist}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </section>
  );
};

export default Playlists;
