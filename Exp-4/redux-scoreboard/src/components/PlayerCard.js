import { useDispatch } from "react-redux";
import {
  increaseScore,
  decreaseScore,
} from "../features/scoreboard/scoreSlice";

export default function PlayerCard({ player }) {
  const dispatch = useDispatch();

  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <h1>{player.score}</h1>

      <div>
        <button onClick={() => dispatch(increaseScore(player.id))}>
          +
        </button>

        <button onClick={() => dispatch(decreaseScore(player.id))}>
          -
        </button>
      </div>
    </div>
  );
}