import { useState } from "react";
import { artistObjectInit } from "../interfaces/interface";
import { createArtist } from "../api/fetch";

/**
 * NewEntryForm()
 * ==============================
 * Page to POST a new data to income or spending.
 * 
 * @returns {React.ReactElement}
 */
function NewArtistForm() {
  const [artist, setArtist] = useState(artistObjectInit);

  /**
   * handleTextChange()
   * ========================================
   * change incomeItem state hook whenever input or textarea is changed.
   * 
   * @typedef {(React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)} customInputEventBundle 
   * @param {customInputEventBundle} event
   */
  const handleTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setArtist({ ...artist, [event.target.id]: event.target.value });
  };

  
  /**
   * handleSubmit()
   * ================================
   * POST a new data to the back-end.
   * @param {React.ChangeEvent<HTMLFormElement>} event 
   */
  const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    createArtist(artist)
        .then(() => console.log("create success!"))
        .catch((err)=>console.error(err));
    }
  
    const handleCheckboxChange = () => {
        setArtist({ ...artist, is_favorite: !artist.is_favorite });
      };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Artist's Name:</label>
        <input
          id="name"
          value={artist.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist's name"
          required
        />
        <label htmlFor="artist">Nationality:</label>
        <input
          id="artist"
          value={artist.nationality}
          type="text"
          onChange={handleTextChange}
          placeholder="Nationality"
          required
        />
        <label htmlFor="is_favorite">Is Favorite?:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={artist.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewArtistForm;