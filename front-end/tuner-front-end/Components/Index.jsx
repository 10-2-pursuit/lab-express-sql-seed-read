import { useEffect, useState } from "react";
import Song from "./Song";
const API = import.meta.env.VITE_BASE_URL;

const Index = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((res) => res.json())
      .then((songs) => {
        setSongs(songs);
      })
      .catch((error) => {
        console.error("Error fetching data.", error);
      });
      
  }, []);

  return (
    <div className="Songs">
      <h2>All Songs</h2>
      <section>
        <table>
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Artist</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <Song key={song.id} id={song.id} song={song} /> 
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Index;
