import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItem,
  onTogglePacking,
  clearAll,
}) {
  const [sortBy, setSortby] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "descr")
    sortedItems = items.slice().sort((a, b) => a.input.localeCompare(b.input));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((e) => (
          <Item
            onDeleteItem={onDeleteItem}
            onTogglePacking={onTogglePacking}
            item={e}
            key={e.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="descr">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearAll}>Clear List</button>
      </div>
    </div>
  );
}
