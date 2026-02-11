import React, { use, useEffect } from "react";

export default function Spaceship({ name, health, setStatus }) {
  useEffect(() => {
    if (health <= 0) {
      setStatus((prev) => ({
        ...prev,
        gameStatus: "over",
        winner: name === "Player" ? "Enemy" : "Player",
      }));
    }
  }, [health, name, setStatus]);

  if (health <= 0) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Ship destroyed!</p>
      </div>
    );
  }
  return (
    <div>
      <h2>{name}</h2>
      <p>Health: {health}❤️</p>
    </div>
  );
}
