import React from "react";

export default function Summary({ text }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold">Summary</h2>
      <p className="mt-2 text-zinc-700 whitespace-pre-line">{text}</p>
    </section>
  );
}
