export default function Skills({ skills }) {
  return (
    <section>
      <h2>Technical Skills</h2>
      {Object.entries(skills).map(([group, items]) => (
        <p key={group}>
          <strong>{group}:</strong> {items.join(", ")}
        </p>
      ))}
    </section>
  );
}
