import styles from "./Spacecraft.module.css";
import { useParams } from "react-router-dom";
export default function Spacecraft({ spacecrafts }) {
  const { id } = useParams();
  if (!spacecrafts) {
    return <p>Loading...</p>;
  }
  const spacecraft = spacecrafts.find((s) => s.id === id);
  if (!spacecraft) {
    return <p>Spacecraft not found</p>;
  }
  return (
    <div>
      <h1>{spacecraft.name}</h1>
      <p>Capacity: {spacecraft.capacity}</p>
      <p>Description: {spacecraft.description}</p>
    </div>
  );
}
