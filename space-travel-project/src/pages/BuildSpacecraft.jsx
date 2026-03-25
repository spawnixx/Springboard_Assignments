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
    };
    BuildNewSpacecraft(newSpacecraft);

    navigate("/pages/Spacecrafts");
  };
  return (
    <div>
      <h1>Build Ship</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ship Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Ship Capacity:
          <input type="number" name="capacity" />
        </label>
        <br />
        <label>
          Ship Description:
          <input type="text" name="description" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
