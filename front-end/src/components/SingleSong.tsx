import { Link, useNavigate } from "react-router-dom";
import { songInterface } from "../interfaces/interface";
import { addSongToPlaylist } from "../api/fetch";

export function SingleSong({ key, item }: { key: string, item: songInterface }) {
  const nav = useNavigate();

  const handleAddToPlaylist = () => {
    addSongToPlaylist(item.id)
      .then(() => {
        console.log(`${item.name} is added successfully to the playlist`);
        alert(`${item.name} is added successfully to the playlist`);
        nav("/playlist");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <tr style={{ cursor: "alias" }} key={key}>
      <td>
        <Link to={`/songs/${item.id}`}>
          {item["name"]}
        </Link>
      </td>
      <td>
        <Link to={`/songs/${item.id}`}>
          {item["artist"]}
        </Link>
      </td>
      <td>
        <Link to={`/songs/${item.id}`}>
          {item.is_favorite ? (<span>Yes</span>) : (<span>No</span>)}
        </Link>
      </td>
      <td>
        <button onClick={handleAddToPlaylist}>Add to Playlist</button>
      </td>
    </tr>
  );
}
