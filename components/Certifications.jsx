export default function Certifications({ certs }) {
  return (
    <section>
      <h2>Certifications</h2>
      <ul>
        {certs.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
