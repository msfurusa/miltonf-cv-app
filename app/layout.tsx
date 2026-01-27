import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  display: "swap",
});

export const metadata = {
  title: "Milton Furusa | DevOps / Cloud Engineer",
  description:
    "DevOps and Cloud Engineer with experience in AWS, Kubernetes, CI/CD, and enterprise platforms.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
