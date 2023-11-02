import { useEffect, useState } from "react";
import { songsInterface } from "../../../front/src/interface/songDB";
import { useParams } from "react-router-dom";
import { getAllSongs } from "../../../front/src/api/fetch";
import { SingleSong } from "./SingleSong";

export function SongsIndex(){
    const [songs, setSongs] = useState([songsInterface]);
    const { id } = useParams();

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
                    <th>Date</th>
                    <th>Item Title</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody className="spending-index">
                  {
                    songs.map((song, id) => <SingleSong key = {id} item = {song} />)
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