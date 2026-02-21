import "./ItemCard.css";
export default function ItemCard({ name, qty, purpose }) {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Quantity: {qty}</p>
      <p>Purpose: {purpose}</p>
    </div>
  );
}
