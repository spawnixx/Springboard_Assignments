import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Planetary Fleet Manager</h1>

        <p className={styles.subtitle}>
          A lightweight system for managing spacecraft locations across the
          galaxy.
        </p>

        <div className={styles.section}>
          <h2>Features</h2>
          <ul>
            <li>View all planets and their populations</li>
            <li>Track stationed spacecrafts in real time</li>
            <li>Move ships between planetary locations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
