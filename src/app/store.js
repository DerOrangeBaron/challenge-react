import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../reducers/characterSlice";

export const store = configureStore({
  reducer: {
    rickAndMorty: characterSlice,
  },
});
