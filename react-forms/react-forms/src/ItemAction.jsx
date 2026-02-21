import "./ItemAction.css";
export default function ItemAction({ itemId, onRemove }) {
  return (
    <div className="item-action">
      <button onClick={() => onRemove(itemId)}>Remove</button>
    </div>
  );
}
