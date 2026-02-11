import React from "react";
import "./GameButton.css";

export default function GameButton({ status, setStatus }) {
  if (status.gameStatus === "over") {
    return (
      <button
        onClick={() => {
          setStatus({
            playerHealth: 100,
            enemyHealth: 100,
            turn: "player",
            gameStatus: "playing",
            winner: null,
          });
        }}
      >
        🔁Restart🔁
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        setStatus((prev) => {
          const playerAttack = Math.floor(Math.random() * 20) + 1;
          const enemyAttack = Math.floor(Math.random() * 20) + 1;

          return {
            ...prev,
            playerHealth: Math.max(0, prev.playerHealth - enemyAttack),
            enemyHealth: Math.max(0, prev.enemyHealth - playerAttack),
          };
        });
      }}
    >
      💥Attack💥
    </button>
  );
}
