import { useState } from "react";
import { songObjectInit } from "../interfaces/interface";
import { createSong } from "../api/fetch";

/**
 * NewEntryForm()
 * ==============================
 * Page to POST a new data to income or spending.
 * 
 * @returns {React.ReactElement}
 */
function NewEntryForm() {
  const [song, setSong] = useState(songObjectInit);

  /**
   * handleTextChange()
   * ========================================
   * change incomeItem state hook whenever input or textarea is changed.
   * 
   * @typedef {(React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)} customInputEventBundle 
   * @param {customInputEventBundle} event
   */
  const handleTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  
  /**
   * handleSubmit()
   * ================================
   * POST a new data to the back-end.
   * @param {React.ChangeEvent<HTMLFormElement>} event 
   */
  const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    createSong(song)
        .then(() => console.log("create success!"))
        .catch((err)=>console.error(err));
    }
  
    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
      };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="song name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist name"
          required
        />
        <label htmlFor="album">Album Name:</label>
        <input
          id="album"
          type="text"
          required
          value={song.album}
          placeholder="Album name"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Length:</label>
        <input
          id="time"
          type="text"
          required
          value={song.time}
          placeholder="length of time"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Is Favorite?:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewEntryForm;