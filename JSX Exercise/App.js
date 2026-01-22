function App() {
  const spacePhenomena = [
    { id: 1, name: "Asteroid Belt", emoji: "☄️" },
    { id: 2, name: "Galactic Nebula", emoji: "🌌" },
    { id: 3, name: "Black Hole", emoji: "🕳️" },
    { id: 4, name: "Supernova Explosion", emoji: "💥" },
    { id: 5, name: "Pulsar", emoji: "⚡" },
    { id: 6, name: "Quasar", emoji: "💫" },
    { id: 7, name: "Exoplanet", emoji: "🪐" },
    { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
    { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
    { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
  ];

  const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];

  const phenomenaWithStatus = spacePhenomena.map((phenomenon) => ({
    ...phenomenon,
    status:
      observationStatuses[
        Math.floor(Math.random() * observationStatuses.length)
      ],
  }));

  return (
    <div>
      <h1>Space Phenomena Observations</h1>
      <br></br>
      {phenomenaWithStatus.map((phenomenon) => (
        <div key={phenomenon.id}>
          <h2>
            {phenomenon.emoji} {phenomenon.name} - {phenomenon.status}
          </h2>
          {phenomenon.status === "🚀 Prime for Study" && (
            <p>Great find! Be sure to bring your best gear!</p>
          )}
          <br></br>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
