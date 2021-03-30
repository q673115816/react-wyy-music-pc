import {
  SET_FRIEND_INIT,
  SET_FRIEND_EVENT,
  SET_FRIEND_EVENT_ADD,
  SET_FRIEND_EVENT_RESET,
  SET_COMMENT_EVENT,
  SET_FRIEND_HOT,
} from './actionTypes';

export const setFriendInit = (payload) => ({
  type: SET_FRIEND_INIT,
  payload,
});

export const setFriendHot = (payload) => ({
  type: SET_FRIEND_HOT,
  payload,
});

export const setFriendEvent = (payload) => ({
  type: SET_FRIEND_EVENT,
  payload,
});

export const setFriendEventAdd = (payload) => ({
  type: SET_FRIEND_EVENT_ADD,
  payload,
});

export const setFriendEventReset = () => ({
  type: SET_FRIEND_EVENT_RESET,
});

export const setCommentEvent = (payload) => ({
  type: SET_COMMENT_EVENT,
  payload,
});
