import { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import "./SpacecraftBuilder.css";

export default function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory((prevInventory) => [...prevInventory, item]);
  };

  const removeItem = (id) => {
    setInventory((prevInventory) =>
      prevInventory.filter((item) => item.id !== id),
    );
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <div className="spacecraft-builder">
        <ItemForm onSubmit={addItem} />
      </div>

      <InventoryDisplay inventory={inventory} onRemove={removeItem} />
    </div>
  );
}
