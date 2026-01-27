import React from "react";
import type { CV } from "@/types/cv";

export default function Header({ cv }: { cv: CV }) {
  return (
    <header className="site-header">
      <div>
        <h1 className="title">{cv.name}</h1>
        <p className="subtitle">{cv.title}</p>
  <p className="subtitle">{cv.location}</p>
      </div>
      {/* side-card removed: contact details are already shown in the subtitle to avoid duplication */}
    </header>
  );
}
