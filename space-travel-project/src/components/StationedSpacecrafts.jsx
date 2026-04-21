import styles from "./StationedSpacecrafts.module.css";
export default function StationedSpacecrafts({
  spacecrafts,
  planetId,
  selectedCraftId,
  setSelectedCraftId,
}) {
  const stationedCrafts = spacecrafts.filter(
    (craft) => craft.currentLocation === planetId,
  );

  return (
    <ul className={styles.list}>
      {stationedCrafts.map((craft) => (
        <li
          className={`${styles.item} ${
            craft.id === selectedCraftId ? styles.selected : ""
          }`}
          key={craft.id}
          onClick={() =>
            setSelectedCraftId((prev) => (prev === craft.id ? null : craft.id))
          }
        >
          🚀{craft.name}
        </li>
      ))}
    </ul>
  );
}
