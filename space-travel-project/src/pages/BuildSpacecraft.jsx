import { useNavigate } from "react-router-dom";
import styles from "./BuildSpacecraft.module.css";
export default function BuildShip({ BuildNewSpacecraft }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const newSpacecraft = {
      id: e.target.name.value,
      name: e.target.name.value,
      capacity: e.target.capacity.value,
      description: e.target.description.value,
      currentLocation: 2,
    };
    BuildNewSpacecraft(newSpacecraft);

    navigate("/pages/Spacecrafts");
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Build Ship</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Ship Name:
            <input className={styles.input} type="text" name="name" />
          </label>

          <label className={styles.label}>
            Ship Capacity:
            <input className={styles.input} type="number" name="capacity" />
          </label>

          <label className={styles.label}>
            Ship Description:
            <input className={styles.input} type="text" name="description" />
          </label>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
