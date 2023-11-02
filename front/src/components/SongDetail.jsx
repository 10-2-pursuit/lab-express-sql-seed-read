import { songsInterface } from "../../../front/src/interface/songDB";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { destroySong, getSingleSong } from "../../../front/src/api/fetch";


export default function SongDetail(){
    const [song, setSong] = useState(songsInterface);
  let { index } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getSingleSong(index)
      .then((json) => {
        setSong(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [index]);

  const handleDelete = () => {
    destroySong(index)
      .then((msg) => {
        console.log(`${index} is deleted successfully from the database`);
        alert(`${index} is deleted successfully from the database`);
        nav("/songs");
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
          <Link to={`/songs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}