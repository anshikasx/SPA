import { useSelector } from "react-redux";

export default function LeaderBoard() {
  const players = useSelector(
    (state) => state.scoreboard.players
  );

  // check if all scores are zero
  const allZero = players.every((p) => p.score === 0);

  // find leader only if game started
  const leader = !allZero
    ? [...players].sort((a, b) => b.score - a.score)[0]
    : null;

  return (
    <div className="leader">
      <h2>🏆 Leader</h2>

      {allZero ? (
        <h1>🎮 Start Game!</h1>
      ) : (
        <h1>{leader.name}</h1>
      )}
    </div>
  );
}