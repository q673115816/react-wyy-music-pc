import { post } from "@/api/request";

interface iApi {}

const apiTopSong = (params) => post("/top/song", params);

export default apiTopSong;
