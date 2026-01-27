import React from "react";
import type { EducationItem } from "@/types/cv";

export default function Education({ education }: { education?: EducationItem[] }) {
  if (!education) return null;
  return (
    <section>
      <h2>Education</h2>
      {education.map((e, i) => (
        <div key={i}>
          <h3>{e.degree}</h3>
          <p>
            {e.institution} • {e.period}
          </p>
        </div>
      ))}
    </section>
  );
}
