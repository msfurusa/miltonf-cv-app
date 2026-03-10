import React from "react";

export default function Profile({ profile }: { profile?: string }) {
  return (
    <section>
      <h2>Profile</h2>
      <p className="whitespace-pre-line">{profile}</p>
    </section>
  );
}
