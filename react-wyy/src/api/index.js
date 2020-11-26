import { get, post } from '../common';

export const apiLoginCellphone = (params) => post('/login/cellphone', params);
export const apiCountriesCodeList = () => get('/countries/code/list');

export const apiVideoGroupList = () => get('/video/group/list');

export const apiArtistList = (params) => post('/artist/list', params);

export const apiToplistArtist = (type) => get(`/toplist/artist?type=${type}`);

export const apiToplistDetail = () => get('/toplist/detail');

export const apiTopSong = (type) => get(`/top/song?type=${type}`);

export const apiTopAlbum = (params) => post('/top/album', params);

export const apiAlbumNew = (params) => post('/album/new', params);

export const apiPlaylistCatlist = () => get('/playlist/catlist');

export const apiTopPlaylist = (params) => post('/top/playlist', params);

export const apiBanner = (type) => get(`/banner?type=${type}`);
