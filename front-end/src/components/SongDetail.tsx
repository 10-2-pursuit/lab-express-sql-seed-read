import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { songObjectInit } from "../interfaces/interface";
import { addSongToPlaylist, destroySong, getSingleSong } from "../api/fetch";


export default function SongDetail(){
    const [song, setSong] = useState(songObjectInit);
  let { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getSingleSong(String(id))
      .then((json) => {
        setSong(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleDelete = () => {
    destroySong(String(id))
      .then(() => {
        console.log(`${id} is deleted successfully from the database`);
        alert(`${id} is deleted successfully from the database`);
        nav("/songs");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAddToPlaylist = () => {
    addSongToPlaylist(String(id))
      .then(() => {
        console.log(`${id} is added successfully to the playlist`);
        alert(`${id} is added successfully to the playlist`);
        nav("/playlist");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <article>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name}
      </h3>
      <h5>
        <span>
          {/*<Link to={`/logs/${log.title}`}>{log.captainName}</Link>*/}
          {song.album}
        </span>
      </h5>
      <h5>
        by {song.artist}
      </h5>
      <h6>Length: {song.time}</h6>
      <p>{song.is_favorite ? (<span>Favorite</span>) : (<span>Not Favorite</span>)}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div>
          <button onClick={handleAddToPlaylist}>Add to Playlist</button>
        </div>
      </div>
    </article>
  );
}