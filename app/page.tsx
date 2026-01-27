import React from "react";
import type { CV } from "@/types/cv";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import DownloadPDF from "@/components/DownloadPDF";
import Summary from "@/components/Summary";
import cv from "@/data/cvData";

export default function Home(): React.ReactElement {
  const data: CV = (cv as unknown) as CV;
  return (
    <main className="container">
      <Header cv={data} />
      <DownloadPDF />
      <Profile summary={data.summary} />
      <Summary text={data.summary} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Certifications certs={data.certifications} />
      <Education education={data.education} />
    </main>
  );
}
