import React from "react";
import type { ExperienceItem } from "@/types/cv";

export default function Experience({ experience }: { experience?: ExperienceItem[] }) {
  if (!experience) return null;
  return (
    <section className="section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experience.map((job, i) => (
          <div className="timeline-item" key={i}>
            <h3>
              {job.role} – {job.company}
            </h3>
            <em>{job.period}</em>
            <ul>
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <p>
              <strong>Tools:</strong> {job.tools}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
