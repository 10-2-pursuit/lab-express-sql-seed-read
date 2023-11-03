export const songObjectInit = {
    id: "",
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
}

export interface songInterface {
    id:string,
    name: string,
    artist: string,
    album: string,
    time: string,
    is_favorite: boolean,
}

export interface playlistInterface{
    playlist_id:string,
    song_id:string,
    id:string,
    name: string,
    artist: string,
    album: string,
    time: string,
    is_favorite: boolean,
}

export const playlistObjectInit = {
    playlist_id: "",
    song_id: "",
    ...songObjectInit,
}