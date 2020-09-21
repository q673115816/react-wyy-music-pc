import request from '@/utils/request'

const 歌手 = '/artist'

export const 歌手热门50首歌曲 = (id) => request.get(歌手 + '/top/song', {id})