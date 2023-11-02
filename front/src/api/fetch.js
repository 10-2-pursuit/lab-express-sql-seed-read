const URL = import.meta.env.REACT_APP_API_URL;

// Index/Get all
export async function getAllSongs() {
  return await fetch(`${URL}/songs`).then((res) => {
    return res.json();
  });
}

// index/Get one
export async function getSingleSong(id) {
  return await fetch(`${URL}/songs/${id}`).then((res) => res.json());
}

// Create
export async function createSong(item) {
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
export async function updateSong(id, item) {
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
export async function destroySong(id) {
  return await fetch(`${URL}/songs/${id}`, {
    method: "DELETE",
  });
}