import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import StationedSpacecrafts from "../components/StationedSpacecrafts";
import styles from "./Planets.module.css";
import Loading from "../components/Loading";
export default function Planets({
  moveSpacecraft,
  spacecrafts,
  planetId,
  selectedCraftId,
  setSelectedCraftId,
}) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPlanets() {
      setLoading(true);
      const response = await SpaceTravelApi.getPlanets();
      setPlanets(response.data);
      setLoading(false);
    }
    getPlanets();
  }, []);

  if (loading) {
    return <Loading text="Loading planets..." />;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planets</h1>
      {selectedCraftId && (
        <p className={styles.message}>
          Click a planet to move the selected spacecraft
        </p>
      )}
      {planets.map((planet) => (
        <div className={styles.planetCard} key={planet.id}>
          <img
            className={`${styles.planetImage} ${selectedCraftId ? styles.clickable : ""}`}
            src={planet.pictureUrl}
            alt={planet.name}
            height={200}
            width={200}
            onClick={() => {
              if (selectedCraftId !== null) {
                moveSpacecraft(selectedCraftId, planet.id);
                setSelectedCraftId(null);
              }
            }}
          />
          <br />
          {planet.name}:<br />
          population: {planet.currentPopulation}
          <StationedSpacecrafts
            spacecrafts={spacecrafts}
            planetId={planet.id}
            selectedCraftId={selectedCraftId}
            setSelectedCraftId={setSelectedCraftId}
          />
          <br />
        </div>
      ))}
    </div>
  );
}
