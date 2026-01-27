import React from "react";

export default function Header({ data }) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="text-sm text-zinc-600">{data.contact}</p>
    </header>
  );
}
