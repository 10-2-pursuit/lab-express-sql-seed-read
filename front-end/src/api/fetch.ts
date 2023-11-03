import { songInterface } from "../interfaces/interface";

const URL = import.meta.env.VITE_APP_API_URL;

// Index/Get all
export async function getAllSongs() {
  return await fetch(`${URL}/songs`).then((res) => {
    console.log(res);
    return res.json();
  });
}

// index/Get one
export async function getSingleSong(id:string | null) {
  return await fetch(`${URL}/songs/${id}`).then((res) => res.json());
}

// Create
export async function createSong(item:songInterface) {
  return await fetch(`${URL}/songs/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

// Update
export async function updateSong(id:string, item:songInterface) {
  return await fetch(`${URL}/songs/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

// Delete
export async function destroySong(id:string) {
  return await fetch(`${URL}/songs/${id}`, {
    method: "DELETE",
  });
}

// Index/Get all
export async function getPlaylist() {
    return await fetch(`${URL}/playlist`).then((res) => {
      console.log(res);
      return res.json();
    });
}

// Create
export async function addSongToPlaylist(id:string) {
    return await fetch(`${URL}/playlist/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });
}

export async function removeSongToPlaylist(id:string) {
    return await fetch(`${URL}/playlist/`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    });
}