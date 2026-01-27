import React from "react";

export default function Skills({ skills }) {
  if (!skills) return null;
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="mt-2 list-disc list-inside">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="mb-2">
            <strong>{category}:</strong> {Array.isArray(items) ? items.join(", ") : String(items)}
          </li>
        ))}
      </ul>
    </section>
  );
}
