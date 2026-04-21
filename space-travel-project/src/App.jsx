import styles from "./App.module.css";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import Planets from "./pages/Planets";
import Spacecrafts from "./pages/Spacecrafts";
import BuildSpacecraft from "./pages/BuildSpacecraft";
import SpaceTravelApi from "./services/SpaceTravelApi.js";
import Spacecraft from "./pages/Spacecraft";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
export default function App() {
  const [selectedCraftId, setSelectedCraftId] = useState(null);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loadingSpacecrafts, SetLoadingSpacecrafts] = useState(true);
  useEffect(() => {
    async function getSpacecrafts() {
      SetLoadingSpacecrafts(true);
      const response = await SpaceTravelApi.getSpacecrafts();
      setSpacecrafts(response.data);
      SetLoadingSpacecrafts(false);
    }
    getSpacecrafts();
  }, []);
  function moveSpacecraft(craftId, newPlanetId) {
    setSpacecrafts((prev) =>
      prev.map((craft) =>
        craft.id === craftId
          ? { ...craft, currentLocation: newPlanetId }
          : craft,
      ),
    );
  }

  function BuildNewSpacecraft(newSpacecraft) {
    setSpacecrafts([...spacecrafts, newSpacecraft]);
  }
  async function destroySpacecraftById(id) {
    await SpaceTravelApi.destroySpacecraftById(id);
    setSpacecrafts((spacecrafts) => spacecrafts.filter((s) => s.id !== id));
  }
  return (
    <>
      <Router>
        <div className={styles.app}>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/pages/Planets"
              element={
                <Planets
                  spacecrafts={spacecrafts}
                  moveSpacecraft={moveSpacecraft}
                  selectedCraftId={selectedCraftId}
                  setSelectedCraftId={setSelectedCraftId}
                />
              }
            />
            <Route
              path="/pages/Spacecrafts"
              element={
                <Spacecrafts
                  spacecrafts={spacecrafts}
                  destroySpacecraftById={destroySpacecraftById}
                />
              }
            />
            <Route
              path="/BuildSpacecraft"
              element={
                <BuildSpacecraft BuildNewSpacecraft={BuildNewSpacecraft} />
              }
            />
            <Route
              path="/pages/Spacecraft/:id"
              element={<Spacecraft spacecrafts={spacecrafts} />}
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
