import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { id: 1, name: "🔥 Ninja", score: 0 },
    { id: 2, name: "⚡ Shadow", score: 0 },
    { id: 3, name: "💀 Phantom", score: 0 },
  ],
};

const scoreSlice = createSlice({
  name: "scoreboard",
  initialState,
  reducers: {
    increaseScore: (state, action) => {
      const player = state.players.find(
        (p) => p.id === action.payload
      );
      player.score += 1;
    },

    decreaseScore: (state, action) => {
      const player = state.players.find(
        (p) => p.id === action.payload
      );
      player.score -= 1;
    },

    resetGame: (state) => {
      state.players.forEach((p) => (p.score = 0));
    },
  },
});

export const { increaseScore, decreaseScore, resetGame } =
  scoreSlice.actions;

export default scoreSlice.reducer;