"use client";

import React from "react";
import cv from "@/data/cvData";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkedin = cv?.linkedin
    ? cv.linkedin.startsWith("http")
      ? cv.linkedin
      : `https://${cv.linkedin}`
    : null;

  function handleClick() {
    // optional analytics hooks - will try common globals if available
    try {
      if (typeof window !== "undefined") {
        // use safer typed access for known analytics globals
        const w = window as unknown as Record<string, unknown>;
        type GtagFn = (...args: unknown[]) => void;
        const maybeGtag = w.gtag as unknown as GtagFn | undefined;
        if (typeof maybeGtag === "function") {
          maybeGtag("event", "click", {
            event_category: "social",
            event_label: "linkedin-footer",
          });
        } else {
          type Analytics = { track: (event: string, props?: Record<string, unknown>) => void };
          const maybeAnalytics = w.analytics as unknown as Analytics | undefined;
          if (maybeAnalytics && typeof maybeAnalytics.track === "function") {
            maybeAnalytics.track("LinkedIn Click", { location: "footer" });
          }
        }
      }
    } catch (e) {
      // swallow errors to avoid breaking navigation
      console.error("analytics error", e);
    }
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-text">© {year} Milton Sipho Furusa</p>
        {linkedin && (
          <div className="footer-socials">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Open LinkedIn profile (opens in new tab)"
              title="LinkedIn"
              onClick={handleClick}
            >
              <span className="icon-bg" aria-hidden>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24h-5V15.5c0-2.1 0-4.9-3-4.9-3 0-3.5 2.4-3.5 4.8V24h-5V8z" />
                </svg>
              </span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
