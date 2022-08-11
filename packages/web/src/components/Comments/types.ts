export interface iComment {
  commentId: number;
  liked: boolean;
  likedCount: number;
  time: number;
  user: any;
}

export interface iList {
  comments: {
    hotComments: iComment[];
    comments: iComment[];
    total: number;
  };
  type?: number;
  more?: string;
}

export interface iHot {
  hotComments: iComment[];
  more?: string;
  type?: number;
}
