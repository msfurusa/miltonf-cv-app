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
              className="footer-link footer-link--outline"
              aria-label="Open LinkedIn profile (opens in new tab)"
              title="LinkedIn"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="3" />
                <path d="M6 9h3v10H6zM7.5 6.5a1.5 1.5 0 11-.001-3.001A1.5 1.5 0 017.5 6.5zM13 14v5h3v-5c0-2.5 3-2.7 3 0v5" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
