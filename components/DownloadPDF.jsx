"use client";

export default function DownloadPDF() {
  return (
    <button onClick={() => window.print()}>
      Download CV (PDF)
    </button>
  );
}
