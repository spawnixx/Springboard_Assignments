import { Link } from "react-router-dom";
import BuildSpacecraftButton from "../components/BuildSpacecraftButton.jsx";
export default function Spacecrafts({ spacecrafts, destroySpacecraftById }) {
  return (
    <div>
      <h1>Spacecrafts</h1>
      <BuildSpacecraftButton />
      {spacecrafts.map((spacecraft) => (
        <div key={spacecraft.id}>
          <Link key={spacecraft.id} to={`/pages/Spacecraft/${spacecraft.id}`}>
            🚀
          </Link>
          {spacecraft.name}:<br />
          capacity: {spacecraft.capacity}
          <br />
          {spacecraft.description}
          <button onClick={() => destroySpacecraftById(spacecraft.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
