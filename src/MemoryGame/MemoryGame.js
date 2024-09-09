import Game from "./Game";
import { useState } from "react";
import "./MemoryGame.css";
const MemoryGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const onClickPlayBut = () => {
    setGameStarted(true);
  };
  return (
    <div className="game-container">
      {!gameStarted && (
        <button className="play-button" onClick={onClickPlayBut}>
          Play
        </button>
      )}
      {gameStarted && <Game />}
    </div>
  );
};
export default MemoryGame;
