export default function Experience({ experience }) {
  return (
    <section>
      <h2>Work Experience</h2>
      {experience.map((job, i) => (
        <div key={i}>
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
    </section>
  );
}
