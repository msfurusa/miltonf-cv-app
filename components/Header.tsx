import React from "react";
import type { CV } from "@/types/cv";

export default function Header({ cv }: { cv: CV }) {
  return (
    <header>
      <h1>{cv.name}</h1>
      <h2>{cv.title}</h2>
      <p>
        {cv.location} · {cv.email} · {cv.phone}
      </p>
    </header>
  );
}
