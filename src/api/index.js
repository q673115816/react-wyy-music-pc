import { get, post } from '../common';

// 音乐
export const apiSongUrl = (params) => post('/song/url', params);
/**
 * 获取歌曲详情
 * @param {ids} params
 */
export const apiSongDetail = (params) => post('/song/detail', params);
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
export const apiRecommendResource = (params) => post('/recommend/resource', params);
// 推荐歌曲 > 登录
export const apiRecommendSongs = () => post('/recommend/songs');
// user - 登录
export const apiLoginCellphone = (params) => post('/login/cellphone', params);
// user - 退出
export const apiLogout = () => get('/logout');
// 二维码登录 key
export const apiLoginQrKey = () => post('/login/qr/key');
// 二维码登录 生成
export const apiLoginQrCreate = (params) => post('/login/qr/create', params);
// 二维码登录 轮询
export const apiLoginQrCheck = (parmas) => post('/login/qr/check', parmas);
// 登录状态
export const apiLoginStatus = (params) => post('/login/status', params);
/**
 * 签到
 * type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到
 */
export const apiDailysignin = (params) => post('/daily_signin', params);
// 私人fm
export const apiPersonalfm = () => get('/personal_fm');
export const apiCountriesCodeList = () => get('/countries/code/list');
export const apiUserAccount = () => post('/user/account');
export const apiUserDetail = (params) => post('/user/detail', params);
export const apiUserPlaylist = (params) => post('/user/playlist', params);
/**
 *  用户 - 更新信息
 * gender: 性别 0:保密 1:男性 2:女性
birthday: 出生日期,时间戳 unix timestamp
nickname: 用户昵称
province: 省份id
city: 城市id
signature：用户签名
 * @param {*} params
 */
export const apiUserUpdate = (params) => post('/user/update', params);
// 用户 - 动态
export const apiUserEvent = (params) => post('/user/event', params);
// 用户 - 关注
export const apiUserFollows = (params) => post('/user/follows', params);
// 用户 - 粉丝
export const apiUserFolloweds = (params) => post('/user/followeds', params);
// 用户电台 登录
export const apiUserDj = (params) => post('/user/dj', params);
// 私信
export const apiMsgPrivateHistory = (params) => post('/msg/private/history', params);
// 通知 - 私信
export const apiMsgPrivate = () => post('/msg/private');
// 通知 - 评论
export const apiMsgComments = (params) => post('/msg/comments', params);
// 通知 - @我
export const apiMsgForwards = (params) => post('/msg/forwards', params);
// 通知 - 通知
export const apiMsgNotices = (params) => post('/msg/private', params);

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

export const apiPlaylistCatlist = () => get('/playlist/catlist');

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
/**
 * 0: 歌曲
1: mv
2: 歌单
3: 专辑
4: 电台
5: 视频
 * @param {id, type, limit, offset, before} params
 */
export const apiCommentHot = (params) => post('/comment/hot', params);
/**
 * type
 * 0: 歌曲
1: mv
2: 歌单
3: 专辑
4: 电台
5: 视频
6: 动态
注意： 动态点赞不需要传入 id 参数，需要传入动态的 threadId 参数,如：/comment/like?type=6&cid=1419532712&threadId=A_EV_2_6559519868_32953014&t=0， threadId 可通过 /event，/user/event 接口获取
 * @param {id, cid, t, type} params
 */
export const apiCommentLike = (params) => post('/comment/like', params);
// 歌曲评论
export const apiCommentMusic = (params) => post('/comment/music', params);
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
// 朋友 - 热门话题
export const apiHotTopic = (params) => post('/hot/topic', params);
// 朋友 - 话题详情
export const apiTopicDetail = (params) => post('/topic/detail', params);
// 朋友 - 话题详情热门动态
export const apiTopicDetailEventHot = (params) => post('/topic/detail/event/hot', params);
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
// 歌手 - 描述
export const apiArtistDesc = (params) => post('/artist/desc', params);
/**
 * 歌手 - 收藏
 * @param {id, t = 1 subscription} params
 */
export const apiArtistSub = (params) => post('/artist/sub', params);
// 歌手 - 相似
export const apiSimiArtist = (params) => post('/simi/artist', params);
// 歌手 - MV
export const apiArtistMv = (params) => post('/artist/mv', params);
// 歌手 - 专辑
export const apiArtistAlbum = (params) => post('/artist/album', params);
// 歌手 - 热门50首
export const apiArtistTopSong = (params) => post('/artist/top/song', params);

// 热搜 - 简
export const apiSearchHot = () => get('/search/hot');

// 热搜 - 详
export const apiSearchHotDetail = () => get('/search/hot/detail');

// 热搜 - 默认关键词 手机用
export const apiSearchDefault = () => get('/search/default');

// 搜索
export const apiSearch = (params) => post('/search', params);
/*
* type: 搜索类型；默认为 1 即单曲 ,
取值意义 :
1: 单曲,
10: 专辑,
100: 歌手,
1000: 歌单,
1002: 用户,
1004: MV,
1006: 歌词,
1009: 电台,
1014: 视频,
1018:综合
*/
// 搜索
export const apiCloudSearch = (params) => post('/cloudSearch', params);
/**
 * 搜索建议
 * @param {keyword: String, type?:mobile} params
 */
export const apiSearchSuggest = (params) => post('/search/suggest', params);
