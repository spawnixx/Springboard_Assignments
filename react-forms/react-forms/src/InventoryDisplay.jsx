import React from "react";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";
import "./InventoryDisplay.css";
export default function InventoryDisplay({ inventory, onRemove }) {
  return (
    <div className="inventory-display">
      <h2>Inventory</h2>
      <div className="inventory-list">
        {inventory.map((item) => (
          <div className="inventory-row" key={item.id}>
            <div>
              <ItemCard
                name={item.name}
                qty={item.qty}
                purpose={item.purpose}
              />
            </div>
            <div>
              <ItemAction itemId={item.id} onRemove={() => onRemove(item.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
