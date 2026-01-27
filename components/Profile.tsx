import React from "react";

export default function Profile({ summary }: { summary?: string }) {
  return (
    <section>
      <h2>Profile</h2>
      <p className="whitespace-pre-line">{summary}</p>
    </section>
  );
}
