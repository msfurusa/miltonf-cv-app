import React from "react";

export default function Skills({ skills }: { skills?: Record<string, string[]> }) {
  if (!skills) return null;
  return (
    <section className="section">
      <h2>Technical Skills</h2>
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} style={{marginTop:10}}>
          <strong>{group}:</strong>
          <div className="skills-grid">
            {items.map((it) => (
              <span className="skill-chip" key={it}>{it}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
