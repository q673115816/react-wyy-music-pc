import { apiCommentMusic, apiCommentMV, apiCommentVideo } from "@/api";

export type Type = "song" | "mv" | "video";

export default {
  song: {
    comment: apiCommentMusic,
  },
  mv: {
    comment: apiCommentMV,
  },
  video: {
    comment: apiCommentVideo,
  },
};
