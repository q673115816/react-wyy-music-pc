import { get, post } from '../common';

// 音乐
export const apiSongUrl = (params) => post('/song/url', params);
// home
// recommend - banner
export const apiBanner = () => get('/banner');
// 独家放送
export const apiPersonalizedPrivatecontent = () => get('/personalized/privatecontent');
// 独家放送列表
export const apiPersonalizedPrivatecontentList = (params) => get('/personalized/privatecontent/list', params);
export const apiPersonalizedNewsong = (params) => post('/personalized/newsong', params);
export const apiPersonalizedMv = () => get('/personalized/mv');
export const apiPersonalizedDjprogram = () => get('/personalized/djprogram');
// dj
// dj - banner
export const apiDjBanner = () => get('/dj/banner');
// dj - 类别
export const apiDjCategoryRecommend = () => get('/dj/category/recommend');
// dj - 电台个性推荐
export const apiDjPersonalizeRecommend = () => get('/dj/personalize/recommend');
// dj - 类别热门电台
export const apiDjRadioHot = (params) => post('/dj/radio/hot', params);

// 歌单
// 歌单 - 详情
export const apiPlaylistDetail = (params) => post('/playlist/detail', params);
// 推荐歌单 > 登录
export const apiRecommendResource = () => post('/recommend/resource');
// 推荐歌曲 > 登录
export const apiRecommendSongs = () => post('/recommend/songs');
// user
export const apiLoginCellphone = (params) => post('/login/cellphone', params);
export const apiCountriesCodeList = () => get('/countries/code/list');
export const apiUserAccount = () => post('/user/account');
export const apiUserDetail = (uid) => get(`/user/detail?uid=${uid}`);
export const apiUserPlaylist = (params) => post('/user/playlist', params);
// 用户电台 登录
export const apiUserDj = (params) => post('/user/dj', params);
// 私信
export const apiMsgPrivate = () => post('/msg/private');
export const apiMsgPrivateHistory = (params) => post('/msg/private/history', params);
export const apiSendText = (params) => post('/send/text', params);
// 云盘
export const apiUserCloud = (params) => post('/user/cloud', params);
// 播放记录
export const apiUserRecord = (params) => post('/user/record', params);

export const apiArtistList = (params) => post('/artist/list', params);

export const apiToplistArtist = (type) => get(`/toplist/artist?type=${type}`);

export const apiToplistDetail = () => get('/toplist/detail');

// 排行榜
export const apiTopSong = (type) => get(`/top/song?type=${type}`);
export const apiTopAlbum = (params) => post('/top/album', params);
export const apiTopPlaylist = (params) => post('/top/playlist', params);
/**
 * 排行榜 -mv
 * @param {limit?: 30,area?:全部|内地|港台|欧美|日本|韩国, offset?: 0} params
 */
export const apiTopMv = (params) => post('/top/mv', params);
export const apiAlbumNew = (params) => post('/album/new', params);

export const apiPlaylistCatlist = () => get('/playlist/music/catlist');

// 视频 - 获取视频标签列表
export const apiVideoGroupList = () => get('/video/group/list');
export const apiVideoGroup = (params) => post('/video/group', params);
export const apiVideoCategoryList = () => post('/video/category/list');
export const apiVideoTimelineRecommend = () => post('/video/timeline/recommend');
// MV地址
export const apiMvUrl = (params) => post('/mv/url', params);
// MV数据
export const apiMvDetail = (params) => post('/mv/detail', params);
// 获取 mv 点赞转发评论数数据
export const apiMvDetailInfo = (params) => post('/mv/detail/info', params);
// MV评论
export const apiCommentMv = (params) => post('/comment/mv', params);
// 视频评论
export const apiCommentVideo = (params) => post('/comment/video', params);
// 视频详情
export const apiVideoDetail = (params) => post('/video/detail', params);
// 相关视频
export const apiRelatedAllvideo = (params) => post('/related/allvideo', params);
// 视频地址
export const apiVideoUrl = (params) => post('/video/url', params);
// 获取视频点赞转发评论数数据
export const apiVideoDetailInfo = (params) => post('/video/detail/info', params);
// 朋友
// 朋友 - 热门话题
export const apiHotTopic = (params) => post('/hot/topic', params);
// 朋友 - 动态消息
export const apiEvent = (params) => post('/event', params);
export const apiCommentEvent = (params) => post('/comment/event', params);
// 关注/取消关注用户
export const apiFollow = (params) => post('/follow', params);

// 我的收藏 - 专辑列表
export const apiAlbumSublist = () => post('/album/sublist');
// 我的收藏 - 歌手列表
export const apiArtistSublist = () => post('/artist/sublist');
// 我的收藏 - 视频列表
export const apiMvSublist = () => post('/mv/sublist');
// 我的收藏 - 专栏列表
export const apiTopicSublist = () => post('/topic/sublist');
// 我的电台
export const apiDjSublist = () => post('/dj/sublist');

// mv - 最新
export const apiMvFirst = (params) => post('/mv/first', params);

// mv - 全部
/**
 *
 * @param {area?: <全部|内地|港台|欧美|日本|韩国>, type?:<全部|官方版|原生|现场版|网易出品|>, order?:<上升最快|最热|最新>, limit?: 30, offset?:0} params
 */
export const apiMvAll = (params) => post('/mv/all', params);

export const apiMvExclusiveRcmd = (params) => post('/mv/exclusive/rcmd', params);

// 歌手 - 详情
export const apiArtistDetail = (params) => post('/artist/detail', params);
