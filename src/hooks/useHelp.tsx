import React from "react";
import { setArtistSublist } from "@/reducers/account/slice";
import { useDispatch } from "react-redux";
import { apiArtistSublist } from "@/api";

export const useRefreshArtistSublist = async (dispatch) => {
  try {
    const { data: artistSublist } = await apiArtistSublist();
    dispatch(setArtistSublist({ artistSublist }));
  } catch (error) {
    console.log(error);
  }
};
