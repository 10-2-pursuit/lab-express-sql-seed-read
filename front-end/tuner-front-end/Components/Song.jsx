import { Link } from "react-router-dom";

const Song = ({ song, id }) => {
  return (
    <>
      <tr>
        <td>{song.name}</td>
        <td>
          <Link to={`/songs/${id}`}>{song.artist}</Link>
        </td>
        <td>{song.album}</td>
      </tr>
    </>
  );
};

export default Song;
