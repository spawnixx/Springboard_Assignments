function InventoryItem({ name, type, quantity = 0, price = 0 }) {
  const lowStockThreshold = 5;
  const highValueThreshold = 1000;
  const totalValue = quantity * price;
  return (
    <div>
      <h2>
        {name} ({type})
      </h2>
      {lowStockThreshold > quantity && (
        <Message>
          <p style={{ color: "red" }}>
            ⚠️ Low Stock! Consider resupplying at the next outpost.
          </p>
        </Message>
      )}
      {highValueThreshold < totalValue && (
        <Message>
          <p style={{ color: "green" }}>
            💰 High Value Item! Ensure secure storage during transit.
          </p>
        </Message>
      )}
    </div>
  );
}
