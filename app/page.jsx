import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import DownloadPDF from "@/components/DownloadPDF";
import cv from "@/data/cvData";

export default function Home() {
  return (
    <main className="container">
      <Header cv={cv} />
      <DownloadPDF />
      <Profile summary={cv.summary} />
      <Skills skills={cv.skills} />
      <Experience experience={cv.experience} />
      <Certifications certs={cv.certifications} />
      <Education education={cv.education} />
    </main>
  );
}
