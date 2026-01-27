import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import cvData from "@/data/cvData";

export default function Home() {
  return (
    <main className="container">
      <Header data={cvData} />
      <Summary text={cvData.summary} />
      <Skills skills={cvData.skills} />
      <Experience />
      <Education />
    </main>
  );
}
