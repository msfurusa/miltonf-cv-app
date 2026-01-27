import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Milton Furusa | DevOps / Cloud Engineer",
  description:
    "DevOps and Cloud Engineer with experience in AWS, Kubernetes, CI/CD, and enterprise platforms.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
