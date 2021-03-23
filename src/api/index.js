import { get, post } from './request';

// 登录状态
export const apiLoginStatus = () => post('/login/status');
export const apiLyric = (params) => post('/lyric', params);
/**
 * 获取音乐 url
 * @param {id, br} params
 */
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
// 独家放送列表 offset limit
export const apiPersonalizedPrivatecontentList = (params) => post('/personalized/privatecontent/list', params);
export const apiPersonalizedNewsong = (params) => post('/personalized/newsong', params);
export const apiPersonalizedMV = () => get('/personalized/mv');
export const apiPersonalizedDjprogram = () => post('/personalized/djprogram');
export const apiProgramRecommend = () => post('/program/recommend');

/**
 * 电台 - 24小时主播榜
 * @param {limit} params
 */
export const apiDjToplistHours = (params) => post('/dj/toplist/hours', params);
// 电台 - 推荐
export const apiDjRecommend = () => get('/dj/recommend');
// 电台 - 今日优选
export const apiDjTodayPerfered = () => get('/dj/today/perfered');
// dj
// dj - banner
export const apiDjBanner = () => get('/dj/banner');
// dj - 分类
export const apiDjCatelist = () => get('/dj/catelist');
/**
 * 电台 - 类别热门电台
 * @param {limit, offset, cateId} params
 */
export const apiDjRadioHot = (params) => post('/dj/radio/hot', params);
// dj - 类别
export const apiDjCategoryRecommend = () => get('/dj/category/recommend');
// dj - 电台个性推荐
export const apiDjPersonalizeRecommend = () => get('/dj/personalize/recommend');
// 电台 -节目榜 limit offset
export const apiDjProgramToplist = () => get('/dj/program/toplist');
// 电台 - 新晋电台榜/热门电台榜 limit offset type=new/hot
export const apiDjToplist = () => get('/dj/toplist');
// 电台 -24小时节目榜 limit
export const apiDjProgramToplistHours = () => get('/dj/program/toplist/hours');

// 歌单
// 歌单 - 详情
export const apiPlaylistDetail = (params) => post('/playlist/detail', params);
/**
 * 歌单收藏者
 * @param {id, limit?, offset?} params
 */
export const apiPlaylistSubscribers = (params) => post('/playlist/subscribers', params);
/**
 *
 * @param {name, privacy?,type?} params
 */
export const apiPlaylistCreate = (params) => post('/playlist/create', params);
/**
 * 电台 - 详情
 * @param {rid} params
 */
export const apiDjDetail = (params) => post('/dj/detail', params);

// 推荐歌单 > 登录
export const apiRecommendResource = (params) => post('/recommend/resource', params);
// 推荐歌曲 > 登录
export const apiRecommendSongs = () => post('/recommend/songs');
// user - 登录
export const apiLoginCellphone = (params) => post('/login/cellphone', params);
/**
 * user - 注册
 * @param {captcha:验证码, phone, password, nickname} params
 */
export const apiRegisterCellphone = (params) => post('/register/cellphone', params);
/**
 * user - 发送验证码
 * @param {phone, ctcode?:国家}
 */
export const apiCaptchaSent = (params) => post('/captcha/sent', params);
// user - 退出
export const apiLogout = () => get('/logout');
// 二维码登录 key
export const apiLoginQrKey = () => post('/login/qr/key');
// 二维码登录 生成
export const apiLoginQrCreate = (params) => post('/login/qr/create', params);
// 二维码登录 轮询
export const apiLoginQrCheck = (params) => post('/login/qr/check', params);

/**
 * 签到
 * type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到
 */
export const apiDailysignin = (params) => post('/daily_signin', params);
// 私人fm
export const apiPersonalfm = () => get('/personal_fm');
export const apiCountriesCodeList = () => get('/countries/code/list');
export const apiUserAccount = () => post('/user/account');
export const apiUserBinding = (params) => post('/user/binding', params);
export const apiUserDetail = (params) => post('/user/detail', params);
export const apiUserPlaylist = (params) => post('/user/playlist', params);
/**
 * 喜欢音乐
 * @param {id, like?:true} params
 */
export const apiLike = (params) => post('/like', params);
// 喜欢音乐列表 uid
export const apiLikelist = (params) => post('/likelist', params);
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
export const apiTopSong = (params) => post('/top/song', params);
export const apiTopAlbum = (params) => post('/top/album', params);
/**
 * 歌单 ( 网友精选碟 )
 * @param {order, cat, limit, offset} params
 */
export const apiTopPlaylist = (params) => post('/top/playlist', params);
/**
 *
 * @param {cat, limit, before} params
 */
export const apiTopPlaylistHighquality = (params) => post('/top/playlist/highquality', params);
// 精品歌单标签列表
export const apiPlaylistHighqualityTags = () => get('/playlist/highquality/tags');
// 热门歌单分类
export const apiPlaylistHot = () => get('/playlist/hot');
/**
 * 排行榜 -mv
 * @param {limit?: 30,area?:全部|内地|港台|欧美|日本|韩国, offset?: 0} params
 */
export const apiTopMV = (params) => post('/top/mv', params);
export const apiAlbumNew = (params) => post('/album/new', params);

export const apiPlaylistCatlist = () => get('/playlist/catlist');

// 视频 - 获取视频标签列表
export const apiVideoGroupList = () => get('/video/group/list');
export const apiVideoGroup = (params) => post('/video/group', params);
export const apiVideoCategoryList = () => post('/video/category/list');
export const apiVideoTimelineRecommend = () => post('/video/timeline/recommend');
// 收藏视频 id, t = 1收藏
export const apiVideoSub = (params) => post('/video/sub', params);
// 收藏mv mvid, t = 1
export const apiMVSub = (params) => post('/mv/sub', params);
// MV地址
export const apiMVUrl = (params) => post('/mv/url', params);
// MV数据
export const apiMVDetail = (params) => post('/mv/detail', params);
// 获取 mv 点赞转发评论数数据
export const apiMVDetailInfo = (params) => post('/mv/detail/info', params);
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
export const apiCommentMV = (params) => post('/comment/mv', params);
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
export const apiMVSublist = () => post('/mv/sublist');
// 我的收藏 - 专栏列表
export const apiTopicSublist = () => post('/topic/sublist');
// 我的电台
export const apiDjSublist = () => post('/dj/sublist');

// mv - 最新
export const apiMVFirst = (params) => post('/mv/first', params);

// mv - 全部
/**
 *
 * @param {area?: <全部|内地|港台|欧美|日本|韩国>, type?:<全部|官方版|原生|现场版|网易出品|>, order?:<上升最快|最热|最新>, limit?: 30, offset?:0} params
 */
export const apiMVAll = (params) => post('/mv/all', params);

export const apiMVExclusiveRcmd = (params) => post('/mv/exclusive/rcmd', params);

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
export const apiArtistMV = (params) => post('/artist/mv', params);
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

/**
 * 搜索多重匹配
 * @param {keywords} params
 */
export const apiSearchMultimatch = (params) => post('/search/multimatch', params);

// comment
// 歌单评论 id, limit?, offset?, before?
export const apiCommentPlaylist = (params) => post('/comment/playlist', params);
