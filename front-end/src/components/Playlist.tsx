import { useEffect, useState } from "react";
import { getPlaylist } from "../api/fetch";
import { playlistObjectInit } from "../interfaces/interface";
import { SingleSongInPlaylist } from "./SingleSongInPlaylist";

export default function Playlist(){
    const [playlist, setPlaylist] = useState([playlistObjectInit]);

    useEffect(() => {
        getPlaylist().then(response => setPlaylist([...response])).catch(err => console.error(err));
    },[]);

    return (
        <div className="SpendingItems container">
          {playlist.length > 0 ? (
            <section className="index-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody className="spending-index">
                  {
                    playlist.map((song, id) => <SingleSongInPlaylist key = {String(id)} item = {song}/>)
                  }
                </tbody>
              </table>
            </section>
          ) : (
            <span>There is no song in the playlist</span>
          )}
        </div>
    );
}