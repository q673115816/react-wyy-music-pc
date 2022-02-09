import UseVideoInit from "./UseVideoInit";
import UseMVInit from "./UseMVInit";
import {
  useGetCommentMVQuery,
  useGetCommentVideoQuery,
} from "@/modules/services/comment/api";

export default {
  video: {
    init: UseVideoInit,
    name: "视频详情",
    sub: "subscribeCount",
    apiComments: useGetCommentVideoQuery,
  },
  mv: {
    init: UseMVInit,
    name: "MV详情",
    sub: "subCount",
    apiComments: useGetCommentMVQuery,
  },
};
