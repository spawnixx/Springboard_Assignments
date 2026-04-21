import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navcontent}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/pages/Planets" className={styles.link}>
          Planets
        </Link>
        <Link to="/pages/Spacecrafts" className={styles.link}>
          Spacecrafts
        </Link>
      </div>
    </nav>
  );
}
