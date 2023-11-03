import { Link, useNavigate } from "react-router-dom";
import { playlistInterface } from "../interfaces/interface";
import { removeSongToPlaylist } from "../api/fetch";

export function SingleSongInPlaylist({
  key,
  item,
}: {
  key: string;
  item: playlistInterface;
}) {
  const nav = useNavigate();

  const handleDelete = () => {
    removeSongToPlaylist(String(item.playlist_id))
      .then(() => {
        console.log(
          `${item.playlist_id} is deleted successfully from the database`
        );
        alert(`${item.playlist_id} is deleted successfully from the database`);
        nav(0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <tr style={{ cursor: "alias" }} key={key}>
      <td>
        <Link to={`/songs/${item.song_id}`}>{item["playlist_id"]}</Link>
      </td>
      <td>
        <Link to={`/songs/${item.song_id}`}>{item["name"]}</Link>
      </td>
      <td>
        <Link to={`/songs/${item.song_id}`}>{item["artist"]}</Link>
      </td>
      <td>
        <Link to={`/songs/${item.song_id}`}>{item["time"]}</Link>
      </td>
      <td>
        <button onClick={handleDelete}>REMOVE</button>
      </td>
    </tr>
  );
}
