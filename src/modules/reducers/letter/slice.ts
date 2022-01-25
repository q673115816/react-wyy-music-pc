import { createSlice } from "@reduxjs/toolkit";

interface LetterState {
  nickname: string;
  hint: string;
  uid: string;
  showMsgPrivateHistory: boolean;
  privatMsgs: [];
}

const initialState: LetterState = {
  nickname: "",
  hint: "",
  uid: "",
  showMsgPrivateHistory: false,
  privatMsgs: [],
};

const slice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    setMsgPrivateHistory(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export default slice.reducer;

export const { setMsgPrivateHistory } = slice.actions;
