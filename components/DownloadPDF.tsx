"use client";
import React from "react";

export default function DownloadPDF() {
  return (
    <button className="download-btn" onClick={() => window.print()}>
      Download CV (PDF)
    </button>
  );
}
