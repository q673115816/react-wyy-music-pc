import { get, post } from "../common";

export const login_cellphone = (params) => post("/login/cellphone", params);
export const countries_code_list = () => get('/countries/code/list')

export const video_group_list = () => get("/video/group/list");

export const artist_list = (params) => post('/artist/list', params)

export const toplist_artist = (type) => get(`/toplist/artist?type=${type}`)

export const toplist_detail = () => get('/toplist/detail')

export const top_song = (type) => get(`/top/song?type=${type}`)

export const top_album = (params) => post('/top/album', params)

export const album_new = (params) => post('/album/new', params)

export const playlist_catlist = () => get("/playlist/catlist");
export const top_playlist = (params) => post('/top/playlist', params)