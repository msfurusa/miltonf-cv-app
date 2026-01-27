import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">© {year} Milton Sipho Furusa — Built with Next.js</p>
        <p className="footer-links">
          <Link href="/" aria-label="Home">Home</Link>
          {' • '}
          <a href="mailto:msfurusa@gmail.com">Contact</a>
        </p>
      </div>
    </footer>
  );
}
