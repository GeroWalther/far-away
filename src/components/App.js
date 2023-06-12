import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((i) => i.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
  }
  function handleClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onTogglePacking={handleToggleItem}
        clearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
