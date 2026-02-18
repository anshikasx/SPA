import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/scoreboard/scoreSlice";

export const store = configureStore({
  reducer: {
    scoreboard: scoreReducer,
  },
});