import { get, post } from "./request";

// 登录状态
export const apiLoginStatus = () => post("/login/status");
/**
 * 获取歌曲详情
 * @param {ids} params
 */
export const apiSongDetail = (params) => post("/song/detail", params);
// 独家放送列表 offset limit
export const apiPersonalizedPrivatecontentList = (params: {
  limit: number;
  offset: number;
}) => post("/personalized/privatecontent/list", params);

/**
 * 电台 - 类别热门电台
 * @param {limit, offset, cateId} params
 */
export const apiDjRadioHot = (params) => post("/dj/radio/hot", params);

// 电台 -节目榜 limit offset
export const apiDJProgramTopList = () => get("/dj/program/toplist");
// 电台 - 新晋电台榜/热门电台榜 limit offset type=new/hot
export const apiDJTopList = (params) => post("/dj/toplist", params);
// 歌单
// 歌单 - 详情
export const apiPlaylistDetail = (params) => post("/playlist/detail", params);

/**
 *
 * @param {name, privacy?,type?} params
 */
export const apiPlaylistCreate = (params) => post("/playlist/create", params);
/**
 * 电台 - 详情
 * @param {rid} params
 */
export const apiDjDetail = (params) => post("/dj/detail", params);

// user - 登录
export const apiLoginCellphone = (params) => post("/login/cellphone", params);
/**
 * user - 注册
 * @param {captcha:验证码, phone, password, nickname} params
 */
export const apiRegisterCellphone = (params) =>
  post("/register/cellphone", params);
/**
 * user - 发送验证码
 * @param {phone, ctcode?:国家}
 */
export const apiCaptchaSent = (params) => post("/captcha/sent", params);

// 二维码登录 key
export const apiLoginQrKey = () => post("/login/qr/key");
// 二维码登录 生成
export const apiLoginQrCreate = (params) => post("/login/qr/create", params);

export const apiUserAccount = () => post("/user/account");

export const apiUserDetail = (params) => post("/user/detail", params);
export const apiUserPlaylist = (params) => post("/user/playlist", params);
/**
 * 喜欢音乐
 * @param {id, like?:true} params
 */
export const apiLike = (params) => post("/like", params);
/**
 * 资源点赞
 * type 1: mv, 4: 电台, 5: 视频, 6: 动态
 * t 1: 点赞， 其他 取消
 * id
 * @param {type, t, id} params
 * @returns
 */
export const apiResourceLike = (params) => post("/resource/like", params);
// 获取点赞过的视频
export const apiPlaylistMylike = () => post("/playlist/mylike");
// 喜欢音乐列表 uid
export const apiLikelist = (params) => post("/likelist", params);

// 用户 - 关注
export const apiUserFollows = (params) => post("/user/follows", params);

// 私信
export const apiMsgPrivateHistory = (params) =>
  post("/msg/private/history", params);
// 通知 - 私信
export const apiMsgPrivate = () => post("/msg/private");
// 通知 - 评论
export const apiMsgComments = (params) => post("/msg/comments", params);
// 通知 - @我
export const apiMsgForwards = (params) => post("/msg/forwards", params);
// 通知 - 通知
export const apiMsgNotices = (params) => post("/msg/private", params);

export const apiSendText = (params) => post("/send/text", params);

export const apiToplistArtist = (type) => get(`/toplist/artist?type=${type}`);

/**
 * 排行榜 -mv
 * @param {limit?: 30,area?:全部|内地|港台|欧美|日本|韩国, offset?: 0} params
 */
export const apiTopMV = (params) => post("/top/mv", params);

// 视频 - 获取视频标签列表
export const apiVideoGroupList = () => get("/video/group/list");
export const apiVideoGroup = (params) => post("/video/group", params);
export const apiVideoCategoryList = () => post("/video/category/list");
export const apiVideoTimelineRecommend = () =>
  post("/video/timeline/recommend");
// 收藏视频 id, t = 1收藏
export const apiVideoSub = (params) => post("/video/sub", params);
// 收藏mv mvid, t = 1
export const apiMVSub = (params) => post("/mv/sub", params);
// MV地址
export const apiMVUrl = (params) => post("/mv/url", params);
// MV数据 mvid!
export const apiMVDetail = (params) => post("/mv/detail", params);
// 获取 mv 点赞转发评论数数据
export const apiMVDetailInfo = (params) => post("/mv/detail/info", params);
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
export const apiCommentLike = (params) => post("/comment/like", params);
// 歌曲评论
export const apiCommentMusic = (params) => post("/comment/music", params);
// MV评论 id!, limit?, offset?, brfore?
export const apiCommentMV = (params) => post("/comment/mv", params);
// 视频评论 id!, limit?, offset?,before?
export const apiCommentVideo = (params) => post("/comment/video", params);
// 视频详情 id!
export const apiVideoDetail = (params) => post("/video/detail", params);
// 相关视频
export const apiRelatedAllvideo = (params) => post("/related/allvideo", params);
// 视频地址
export const apiVideoUrl = (params) => post("/video/url", params);
// 获取视频点赞转发评论数数据
export const apiVideoDetailInfo = (params) =>
  post("/video/detail/info", params);
// 朋友 - 话题详情
export const apiTopicDetail = (params) => post("/topic/detail", params);
// 关注/取消关注用户
export const apiFollow = (params) => post("/follow", params);

// 我的收藏 - 专辑列表
export const apiAlbumSublist = () => post("/album/sublist");
// 我的收藏 - 歌手列表
export const apiArtistSublist = () => post("/artist/sublist");
// 我的收藏 - 视频列表
export const apiMVSublist = () => post("/mv/sublist");
// 我的收藏 - 专栏列表
export const apiTopicSublist = () => post("/topic/sublist");

// mv - 全部
/**
 *
 * @param {area?: <全部|内地|港台|欧美|日本|韩国>, type?:<全部|官方版|原生|现场版|网易出品|>, order?:<上升最快|最热|最新>, limit?: 30, offset?:0} params
 */
export const apiMVAll = (params) => post("/mv/all", params);

// comment
// 歌单评论 id, limit?, offset?, before?
export const apiCommentPlaylist = (params: { id: string }) =>
  post("/comment/playlist", params);

export const apiSetting = () => get("/setting");
