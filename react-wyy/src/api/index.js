import { get, post } from "../common";

export const playlist_catlist = () => get("/playlist/catlist");

export const video_group_list = () => get("/video/group/list");

export const login_cellphone = (params) => post("/login/cellphone", params);

export const artist_list = (params) => post('/artist/list', params)

export const toplist_artist = (type) => get(`/toplist/artist?type=${type}`)

export const toplist_detail = () => get('/toplist/detail')

export const top_song = (type) => get(`/top/song?type=${type}`)