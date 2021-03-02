import { SET_FRIEND_INIT, SET_FRIEND_EVENT, SET_COMMENT_EVENT } from './actionTypes';

export const setFriendInit = (payload) => ({
  type: SET_FRIEND_INIT,
  payload,
});

export const setFriendEvent = (payload) => ({
  type: SET_FRIEND_EVENT,
  payload,
});

export const setCommentEvent = (payload) => ({
  type: SET_COMMENT_EVENT,
  payload,
});
