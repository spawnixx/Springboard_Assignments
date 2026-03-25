import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    async function getPlanets() {
      const response = await SpaceTravelApi.getPlanets();
      setPlanets(response.data);
    }
    getPlanets();
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      {planets.map((planet) => (
        <div key={planet.id}>
          <img
            src={planet.pictureUrl}
            alt={planet.name}
            height={200}
            width={200}
          />
          <br />
          {planet.name}:<br />
          population: {planet.currentPopulation}/{planet.maxPopulation}
        </div>
      ))}
    </div>
  );
}
