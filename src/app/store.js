import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    characters: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
});
