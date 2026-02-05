import PlayerHand from './PlayerHand';
import Controls from './Controls';

export default function GameBoard() {
  return (
    <div>
      <h2>Game Table</h2>
      <PlayerHand />
      <Controls />
    </div>
  );
}
