import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {number} from "mathjs"

const initialState: number = 0;

// const initialState: any={
//   product:number;
//   soluong:number;
//   }

export const mySlice = createSlice({
  name: "me",
  initialState, // initial state
  reducers: {
    update(state: number, action: PayloadAction<number>) {
      state = action.payload;
      console.log("+++");
      return state;
    },
  },
});