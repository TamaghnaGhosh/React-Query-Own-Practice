import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "Item",
  initialState: {
    // id: 0,
    // title: "",
    db: [],
  },
  reducers: {
    getDb: (state, action) => {
      state.db = action.payload;
    },
    getPost: (state, action) => {
      ({ ...state, ...action.payload });
    },
    // getPost: (state, action) => {
    //   state.db.push(action.payload);
    // },
    // getPost: (state, action) => ({ ...state, ...action.payload }),
    
  },
});

export const { getPost, getDb } = itemSlice.actions;

export default itemSlice.reducer;
