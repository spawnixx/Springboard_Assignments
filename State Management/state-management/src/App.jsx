import { useState } from "react";
import "./App.css";
import GameButton from "./GameButton";
import Spaceship from "./Spaceship";

function App() {
  const [status, setStatus] = useState({
    playerHealth: 100,
    enemyHealth: 100,
    turn: "player",
    gameStatus: "playing",
    winner: null,
  });

  return (
    <>
      <h1>Space Battle Game</h1>
      <Spaceship
        name="Player"
        health={status.playerHealth}
        setStatus={setStatus}
      />
      <GameButton status={status} setStatus={setStatus} />
      <Spaceship
        name="Enemy"
        health={status.enemyHealth}
        setStatus={setStatus}
      />
    </>
  );
}

export default App;
