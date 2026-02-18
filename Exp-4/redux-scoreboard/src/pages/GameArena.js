import { useSelector, useDispatch } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import LeaderBoard from "../components/LeaderBoard";
import { resetGame } from "../features/scoreboard/scoreSlice";

export default function GameArena() {
  const players = useSelector(
    (state) => state.scoreboard.players
  );

  const dispatch = useDispatch();

  return (
    <div className="arena">
      <h1>🎮 GAME ARENA</h1>

      <LeaderBoard />

      <div className="players">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      <button
        className="reset"
        onClick={() => dispatch(resetGame())}
      >
        Reset Match
      </button>
    </div>
  );
}