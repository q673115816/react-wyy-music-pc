import { get, post } from "../common";

export const playlist_catlist = () => get("/playlist/catlist");

export const video_group_list = () => get("/video/group/list");

export const login_cellphone = (params) => post("/login/cellphone", params);
