import React from "react";

export default function Certifications({ certs }: { certs?: string[] }) {
  if (!certs) return null;
  return (
    <section>
      <h2>Certifications</h2>
      <ul>
        {certs.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
