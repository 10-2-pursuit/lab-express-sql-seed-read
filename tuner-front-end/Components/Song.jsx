import { Link } from "react-router-dom";

const Song = ({ song, id }) => {
  return (
    <>
      <tr>
        <td>{song.is_favorite ? (<span>♯</span>) : (<span>♭</span>)}</td>
        <td>{song.name}</td>
        <td>
          <Link to={`/songs/${id}`}>{song.artist}</Link>
        </td>
        <td>{song.album}</td>
      </tr>
      <hr />
    </>
  );
};

export default Song;
