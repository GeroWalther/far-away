export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything! Ready to go ! ✈️"
          : `💼 You have items ${numItems} on your list, and you already packed
        ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
