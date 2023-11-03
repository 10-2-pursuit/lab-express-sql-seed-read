import { useEffect, useState } from "react";
import { SingleSong } from "./SingleSong";
import { getAllSongs } from "../api/fetch";
import { songObjectInit } from "../interfaces/interface";

export default function SongsIndex(){
    const [songs, setSongs] = useState([songObjectInit]);

    useEffect(() => {
        getAllSongs().then(response => setSongs([...response])).catch(err => console.error(err));
    },[]);

    return (
        <div className="SpendingItems container">
          {songs.length > 0 ? (
            <section className="index-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Favorite</th>
                  </tr>
                </thead>
                <tbody className="spending-index">
                  {
                    songs.map((song, id) => <SingleSong key = {String(id)} item = {song}/>)
                  }
                </tbody>
              </table>
            </section>
          ) : (
            <span>loading</span>
          )}
        </div>
    );
}