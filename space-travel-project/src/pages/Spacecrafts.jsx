import { Link } from "react-router-dom";
import BuildSpacecraftButton from "../components/BuildSpacecraftButton.jsx";
import styles from "./Spacecrafts.module.css";
import Loading from "../components/Loading.jsx";

export default function Spacecrafts({ spacecrafts, destroySpacecraftById }) {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Spacecrafts</h1>
      </div>
      <div>
        <BuildSpacecraftButton />
      </div>
      {spacecrafts.map((spacecraft) => (
        <div className={styles.craftCard} key={spacecraft.id}>
          <Link key={spacecraft.id} to={`/pages/Spacecraft/${spacecraft.id}`}>
            🚀
          </Link>
          <div>{spacecraft.name}</div>
          <div>capacity: {spacecraft.capacity}</div>
          <div>{spacecraft.description}</div>
          <button onClick={() => destroySpacecraftById(spacecraft.id)}>
            Destroy
          </button>
        </div>
      ))}
    </div>
  );
}
