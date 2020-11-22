import { get, post } from "../common";

export const playlist_catlist = () => get("/playlist/catlist");

export const video_group_list = () => get("/video/group/list");

export const login_cellphone = (params) => post("/login/cellphone", params);

export const toplist_artist = (params) => post('/toplist/artist', params)

export const artist_list = (params) => post('/artist/list', params)