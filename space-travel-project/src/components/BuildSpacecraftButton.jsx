import styles from "./BuildSpacecraftButton.module.css";
import { useNavigate } from "react-router-dom";
export default function BuildShipButton() {
  const navigate = useNavigate();
  return (
    <button
      className={styles.button}
      onClick={() => navigate("/BuildSpacecraft")}
    >
      Build New Spacecraft
    </button>
  );
}
