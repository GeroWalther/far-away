export default function Item({ item, onDeleteItem, onTogglePacking }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onTogglePacking(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.select} {item.input}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
