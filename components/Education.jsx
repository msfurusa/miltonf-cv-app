export default function Education({ education }) {
  return (
    <section>
      <h2>Education</h2>
      {education.map((e, i) => (
        <p key={i}>
          <strong>{e.qualification}</strong><br />
          {e.institution} · {e.year}
        </p>
      ))}
    </section>
  );
}
