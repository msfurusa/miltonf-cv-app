import React from "react";
import type { CV } from "@/types/cv";
import DownloadPDF from "@/components/DownloadPDF";

export default function Header({ cv }: { cv: CV }) {
  return (
    <header className="site-header">
      <div>
        <h1 className="title">{cv.name}</h1>
        <p className="subtitle">{cv.title}</p>
        <p className="subtitle">{cv.location}</p>

        {/* contact links restored in the left/title block (previous behavior) */}
        <div className="contact-links" aria-hidden={!(cv.email || cv.phone)}>
          {cv.email ? (
            <a className="contact-link" href={`mailto:${cv.email}`}>{cv.email}</a>
          ) : null}
          {cv.phone ? (
            <span className="contact-sep"> &nbsp;•&nbsp; </span>
          ) : null}
          {cv.phone ? (
            <a className="contact-link" href={`tel:${cv.phone}`}>{cv.phone}</a>
          ) : null}
        </div>
      </div>

      <div className="header-actions">
        <DownloadPDF />
      </div>
    </header>
  );
}
