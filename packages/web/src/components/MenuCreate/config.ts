import { apiPost } from "@/shared/api/client";

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
